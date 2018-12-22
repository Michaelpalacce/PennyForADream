<?php

namespace App\ResourceLocator;

/**
 * @breif	Class resource locator used to locate resources in the project
 */
class ResourceLocator
{
	/**
	 * @var	string ROOT_DIR
	 */
	const ROOT_DIR	= __DIR__ .'/../../';

	/**
	 * @return	string
	 */
	public static function getRootDir()
	{
		return self::ROOT_DIR;
	}

	/**
	 * @return	string
	 */
	public static function getPublicDir()
	{
		return self::getRootDir() . '/public';
	}

	/**
	 * @return	string
	 */
	public static function getJsDir()
	{
		return self::getPublicDir() . '/js';
	}

	/**
	 * @return	string
	 */
	public static function getCssDir()
	{
		return self::getPublicDir() . '/style';
	}
}
