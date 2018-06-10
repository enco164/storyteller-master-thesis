<?php

namespace App\Http\Controllers;

use App\PictureBook;
use Illuminate\Http\Request;

class PictureBookController extends Controller
{
  /**
   * Display a listing of the resource.
   *
   * @return PictureBook[]|\Illuminate\Database\Eloquent\Collection
   */
  public function index()
  {
    return PictureBook::all();
  }

  /**
   * Store a newly created resource in storage.
   *
   * @param  \Illuminate\Http\Request  $request
   * @return \Illuminate\Http\Response
   */
  public function store(Request $request)
  {
    $pictureBook = PictureBook::create($request->all());

    return response()->json($pictureBook, 201);
  }

  /**
   * Display the specified resource.
   *
   * @param  \App\PictureBook  $pictureBook
   * @return PictureBook
   */
  public function show(PictureBook $pictureBook)
  {
    return $pictureBook;
  }

  /**
   * Update the specified resource in storage.
   *
   * @param  \Illuminate\Http\Request  $request
   * @param  \App\PictureBook  $pictureBook
   * @return \Illuminate\Http\Response
   */
  public function update(Request $request, PictureBook $pictureBook)
  {

    $pictureBook->update($request->all());
    return response()->json($pictureBook, 200);
  }

  /**
   * Remove the specified resource from storage.
   *
   * @param  \App\PictureBook  $pictureBook
   * @return \Illuminate\Http\Response
   */
  public function destroy(PictureBook $pictureBook)
  {
    if (!$pictureBook->delete()) {
      return response()->json(["error" => "Internal server error"], 500);
    }
    return response()->json(null, 204);
  }
}
