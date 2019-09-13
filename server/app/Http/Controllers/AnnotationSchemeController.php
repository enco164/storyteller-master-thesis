<?php

namespace App\Http\Controllers;

use App\AnnotationScheme;
use App\Http\Resources\AnnotationSchemeResource;
use Illuminate\Http\Request;

class AnnotationSchemeController extends Controller
{

  /**
   * Display a listing of the resource.
   *
   * @return \Illuminate\Http\Resources\Json\AnonymousResourceCollection
   */
  public function index()
  {
    $collection = AnnotationScheme::paginate((int)request()->per_page);

    if (request()->sort_by) {
      $collection = AnnotationScheme::orderBy(request()->sort_by, request()->sort_direction)->paginate((int)request()->per_page);
    }

    return AnnotationSchemeResource::collection(
      $collection
    );
  }

  /**
   * Store a newly created resource in storage.
   *
   * @param  \Illuminate\Http\Request $request
   * @return AnnotationSchemeResource
   */
  public function store(Request $request)
  {
    $annotationScheme = AnnotationScheme::create($request->all());
    return new AnnotationSchemeResource($annotationScheme);
  }

  /**
   * Display the specified resource.
   *
   * @param  \App\AnnotationScheme $annotationScheme
   * @return AnnotationSchemeResource
   */
  public function show(AnnotationScheme $annotationScheme)
  {
    return new AnnotationSchemeResource($annotationScheme);
  }

  /**
   * Update the specified resource in storage.
   *
   * @param  \Illuminate\Http\Request $request
   * @param  \App\AnnotationScheme $annotationScheme
   * @return AnnotationSchemeResource
   */
  public function update(Request $request, AnnotationScheme $annotationScheme)
  {
    $annotationScheme->update($request->only(['title']));
    return new AnnotationSchemeResource($annotationScheme);
  }

  /**
   * Remove the specified resource from storage.
   *
   * @param  \App\AnnotationScheme $annotationScheme
   * @return \Illuminate\Http\Response
   * @throws \Exception
   */
  public function destroy(AnnotationScheme $annotationScheme)
  {
    $annotationScheme->delete();

    return response()->json(null, 204);
  }
}
