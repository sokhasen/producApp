<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Product;
class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index( Request $request)
    {

        $response = array();

        $query = Product::select(array(
            'products.*'
        ));
        if ($request->search != null) {
            $search =  (string)$request->search;
            $query->where( function($query) use($search) {
                $query
                    ->orWhere('products.name', 'LIKE', "%$search%")
                    ->orWhere('products.price', 'LIKE', "%$search%")
                    ->orWhere('products.code', 'LIKE', "%$search%")
                    ->orWhere('products.amount', 'LIKE', "%$search%");
            });
        }
        $products = $query->where("products.is_deleted", false)
        ->orderBy("products.created_at", "DESC")
        ->paginate(10);

        $response = array(
            "total" => $products->total(),
            "from" => $products->firstItem(),
            "last_page" => $products->lastPage(),
        );
        foreach ($products as $product) {
            $response['products'][] = array(
                'id' => $product->id,
                'name' => $product->name, 
                'code' => $product->code,
                'amount' => $product->amount,
                'price' => $product->price, 
                'created_at' => date('d-m-Y', strtotime($product->created_at)),
                'updated_at' => date('d-m-Y', strtotime($product->updated_at)),
            );
        }
        return response()->json($response, 200);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $product = Product::create([
            "code" => (int)$request->code,
            "name" => (string)$request->name,
            "price" => (double)$request->price,
            "amount" => (int)$request->amount
        ]);
        return response(['product' => $product? $product: null, 'code' => 200, 'message' => 'success', 'success' => true], 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $product = Product::find($id);

            $product->code = (int)$request->code;
            $product->name = (string)$request->name;
            $product->price = (double)$request->price;
            $product->amount = (int)$request->amount;
        return response(['product' => $product->save()? $product: null, 'code' => 200, 'message' => 'success', 'success' => true], 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $product = Product::where('id', $id)->update(["is_deleted" =>true ]);
        return response(['product' => $product? $product: null, 'code' => 200, 'message' => 'success', 'success' => true], 200);
    }
}
