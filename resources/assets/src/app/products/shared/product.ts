export class Product {
	/**
	* properties list */
	_id: number;
	_name: string;
	_price: number;
	_amount: number;
	_code: number;
	_image: string;
	_created_at: string;
	_updated_at: string;

	constructor()	{}
	
	/**
  *  @method id() : set value to id property
  *  @param { value } : required parameter
  *  @return void : no return type 
  */
	set id( id: number) {
		this._id = id;
	}

  /**
  *  @method name() : set value to name property
  *  @param { value } : required parameter
  *  @return void : no return type 
  */
	set name( name: string) {
		this._name = name;
	}

	/**
  *  @method price() : set value to price property
  *  @param { value } : required parameter
  *  @return void : no return type 
  */
	set price( price: number) {
		this._price = price;
	}

  /**
  *  @method amount() : set value to amount property
  *  @param { value } : required parameter
  *  @return void : no return type 
  */
	set amount( amount: number ) {
		this._amount = amount;
	}

  /**
  *  @method code() : set value to code property
  *  @param { value } : required parameter
  *  @return void : no return type 
  */
	set code ( code: number ) {
		this._code = code;
	}

	/**
  *  @method image() : set value to image property
  *  @param { value } : required parameter
  *  @return void : no return type 
  */
	set image ( image: string) {
		this._image = image;
	}
	
  /**
  *  @method created_at() : set value to created_at property
  *  @param { value } : required parameter
  *  @return void : no return type 
  */	
	set created_at( date: string ) {
		this._created_at = date;
	}

  /**
  *  @method updated_at() : set value to updated_at property
  *  @param { value } : required parameter
  *  @return void : no return type 
  */
	set updated_at( date: string) {
		this._updated_at = date;
	}


  /**
  *  @method id() : get value from id property
  *  @param { void } : no parameter
  *  @return number : return id 
  */
	get id(): number {
		return this._id;
	}

  /**
  *  @method name() : get value from name property
  *  @param { void } : no parameter
  *  @return string : return name 
  */
	get name(): string {
		return this._name;
	}

  /**
  *  @method price() : get value from price property
  *  @param { void } : no parameter
  *  @return number : return price 
  */
	get price(): number {
		return this._price;
	}

  /**
  *  @method amount() : get value from amount property
  *  @param { void } : no parameter
  *  @return number : return amount 
  */
	get amount(): number {
		return this._amount;
	}

  /**
  *  @method code() : get value from code property
  *  @param { void } : no parameter
  *  @return number : return code 
  */
	get code(): number {
		return this._code;
	}


  /**
  *  @method image() : get value from image property
  *  @param { void } : no parameter
  *  @return string : return image 
  */
	get image(): string {
		return this._image;
	}

 /**
  *  @method created_at() : get value from created_at property
  *  @param { void } : no parameter
  *  @return string : return created_at 
  */
	get created_at(): string {
		return this._created_at;
	}

 /**
  *  @method updated_at() : get value from updated_at property
  *  @param { void } : no parameter
  *  @return string : return updated_at 
  */
	get updated_at(): string {
		return this._updated_at;
	}
}
