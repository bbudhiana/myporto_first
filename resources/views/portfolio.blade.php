<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" class="dark">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>Bana Budhiana - Senior Full-Stack Developer & Server Administrator</title>
    <meta name="description" content="Portfolio of Bana Budhiana — 20+ years of experience in full-stack web development with Laravel, React, and Linux server infrastructure.">
    <meta name="keywords" content="Bana Budhiana, full-stack developer, Laravel, React, PHP, Linux, server administrator, web developer">
    <meta name="author" content="Bana Budhiana">

    {{-- Open Graph --}}
    <meta property="og:type" content="website">
    <meta property="og:title" content="Bana Budhiana - Senior Full-Stack Developer">
    <meta property="og:description" content="20+ years of experience building high-performance web ecosystems with Laravel, React, and Linux infrastructure.">
    <meta property="og:url" content="{{ url('/') }}">
    <meta property="og:image" content="{{ url('/images/about.jpg') }}">

    {{-- Twitter Card --}}
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="Bana Budhiana - Senior Full-Stack Developer">
    <meta name="twitter:description" content="20+ years of experience building high-performance web ecosystems with Laravel, React, and Linux infrastructure.">
    <meta name="twitter:image" content="{{ url('/images/about.jpg') }}">

    <link rel="icon" type="image/x-icon" href="{{ asset('favicon.ico') }}">
    @viteReactRefresh
    @vite(['resources/css/app.css', 'resources/js/app.jsx'])
</head>
<body class="antialiased">
    <div id="app"></div>
</body>
</html>
