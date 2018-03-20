<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
     protected $fillable = ['id', 'code', 'name', 'price', 'amount', 'created_at', 'updated_at'];
}
