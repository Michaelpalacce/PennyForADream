<?php

use Illuminate\Support\Facades\File;
use App\ResourceLocator\ResourceLocator;
use App\FileLoader\JsFileLoader;

$router->get('/', function () use ($router) {
    return view('index' );
});

$router->get('main', function () use ($router) {
    return JsFileLoader::combineJsFiles();
});
