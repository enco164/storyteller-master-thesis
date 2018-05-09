<?php

namespace App\Http\Controllers;

use App\Kid;
use Illuminate\Http\Request;

class KidController extends Controller
{
  /**
   * Display a listing of the resource.
   *
   * @return Kid[]|\Illuminate\Database\Eloquent\Collection
   */
  public function index()
  {
    return Kid::all();
  }

  /**
   * Store a newly created resource in storage.
   *
   * @param  \Illuminate\Http\Request $request
   * @return \Illuminate\Http\Response
   */
  public function store(Request $request)
  {
    $kid = Kid::create($request->all());

    return response()->json($kid, 201);
  }

  /**
   * Display the specified resource.
   *
   * @param  \App\Kid $kid
   * @return Kid
   */
  public function show(Kid $kid)
  {
    return $kid;
  }

  /**
   * Update the specified resource in storage.
   *
   * @param  \Illuminate\Http\Request $request
   * @param  \App\Kid $kid
   * @return \Illuminate\Http\Response
   */
  public function update(Request $request, Kid $kid)
  {
    $kid->update($request->all());
    return response()->json($kid, 200);
  }

  /**
   * Remove the specified resource from storage.
   *
   * @param  \App\Kid $kid
   * @return \Illuminate\Http\Response
   */
  public function destroy(Kid $kid)
  {
    $kid->delete();

    return response()->json(null, 204);
  }
}
