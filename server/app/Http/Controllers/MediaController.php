<?php

namespace App\Http\Controllers;

use App\Media;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class MediaController extends Controller
{
    private $image_ext = ['jpg', 'jpeg', 'png', 'gif'];
    private $audio_ext = ['mp3', 'ogg', 'mpga'];
    private $video_ext = ['mp4', 'mpeg'];
    private $media;
    /**
     * @var \Illuminate\Support\Facades\Storage
     */
    private $storage;

    public function __construct(Media $media, Storage $storage)
    {
        $this->media = $media;
        $this->storage = $storage;
    }

    public function index()
    {
        return Media::all();
    }

    public function store(Request $request)
    {
        $file = $request->file('file');
        $ext = $file->getClientOriginalExtension();
        $type = $this->getType($ext);
        $originalName = $file->getClientOriginalName();
        if ($this->storage->exists('/public/' . $type . '/' . $originalName)) {
            return response()->json(['error' => 'file exists']);
        }

        if (!$this->storage->putFileAs('/public/' . $type . '/', $file, $originalName)) {
            return response()->json(false);
        }

        $model = $this->media->create([
            'name' => $originalName,
            'type' => $type,
        ]);

        return $model;
    }

    /**
     * Type of extension
     * @param $ext
     * @return null|string
     */
    private function getType($ext)
    {
        $ext = strtolower($ext);

        if (in_array($ext, $this->image_ext)) {
            return 'image';
        }

        if (in_array($ext, $this->audio_ext)) {
            return 'audio';
        }

        if (in_array($ext, $this->video_ext)) {
            return 'video';
        }

        return null;
    }

    public function show(Media $media)
    {
        return response()->json(['data' => $media]);
    }

    public function update(Request $request, Media $media)
    {

    }

    public function destroy(Media $media)
    {

    }

    /**
     * Get all extensions
     * @return array
     */
    private function allExtensions()
    {
        return array_merge($this->image_ext, $this->audio_ext, $this->video_ext);
    }
}
