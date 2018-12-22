<?php

namespace App\FileLoader;

use App\ResourceLocator\ResourceLocator;

/**
 * @breif	Class that is used to load js files as a bulk
 */
class JsFileLoader
{
	/**
	 * @return	string
	 */
	public static function combineJsFiles() : string
	{
		$found	= '';

		$jsdIr	= ResourceLocator::getJsDir();

		self::search( $jsdIr . '/lib', $found );
		self::search( $jsdIr . '/app', $found );
		self::search( $jsdIr . '/app.js', $found );

		return $found;
	}

	////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

	/**
	 * @param	string $file
	 * @param	string $found
	 */
	private static function search( string $file, string &$found )
	{
		if ( is_file( $file ) )
		{
			if ( strpos( $file, '.js' ) !== false )
			{
				$found	.= file_get_contents( $file );
			}
		}
		else
		{
			$base_dir	= $file;
			$dh			= opendir( $base_dir );

			while ( ( $file = readdir( $dh ) ) )
			{
				if ( ( $file != '.' ) && ( $file != '..' ) )
				{
					self::search($base_dir . '/' . $file, $found );
				}
			}
			closedir( $dh );
		}
	}
}