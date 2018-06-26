<?php

namespace App\Http\Controllers;

use App\Session;
use Illuminate\Http\Request;

class SessionController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return Session[]|\Illuminate\Database\Eloquent\Collection
     */
    public function index()
    {
        return Session::with(['pictureBook', 'kid'])->get();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $session = Session::create($request->all());

        return response()->json($session, 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Session  $session
     * @return Session
     */
    public function show(Session $session)
    {
        return $session;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  \App\Session $session
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Session $session)
    {
        $session->update($request->all());
        return response()->json($session, 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Session $session
     * @return \Illuminate\Http\Response
     */
    public function destroy(Session $session)
    {
        try {
            $session->delete();
            return response()->json(null, 204);
        } catch (\Exception $e) {
            return response()->json(["error" => "Internal server error: " . $e->getMessage()], 500);
        }

    }
}
