<?php

namespace App\Http\Controllers\API;
use App\etkinlik;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class EventsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return etkinlik::latest()->paginate(10);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        return etkinlik::create([
            'name' => $request['name'],
            'date' => $request['date'],
            'timestarts' => $request['timestarts'],
            'timeends' => $request['timeends'],
            'place' => $request['place'],
            'subject' => $request['subject'],
            'category' => $request['category'],
        ]);
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
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $user = etkinlik::findOrFail($id);
        $user->update($request->all());
        return ['message' => 'Updated the event info'];
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $event = etkinlik::findOrFail($id);
        $event->delete();
        return ['message' => 'event Deleted'];
    }
}
