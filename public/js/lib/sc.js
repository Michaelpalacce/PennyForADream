'use strict';

class _Sc
{
	constructor()
	{
		this.modules	= [];
	}

	require( moduleId )
	{
		if ( ! ( moduleId in this.modules ) )
		{
			// Throw error if does not exist
			throw new Error( 'Module ' + moduleId +' not defined' );
		}

		let module	= this.modules[moduleId];

		if ( module.element !== undefined )
		{
			// Return the element
			return module.element;
		}

		let element	= module.factory.apply( this, this.getDependencies( moduleId ) );

		if ( element === undefined || element === null )
		{
			throw new Error( 'Module ' + moduleId + ' did not return anything from it\'s factory.' );
		}

		module.element	= element;

		return module.element;
	}

	define( moduleId, dependencies, factory )
	{
		if ( moduleId.constructor !== String )
		{
			throw new Error( 'moduleId must be of type string for: ' + moduleId );
		}
		if ( dependencies.constructor !== Array )
		{
			throw new Error( 'dependencies must be an Array for: ' + moduleId );
		}

		if ( typeof factory !== 'function' )
		{
			throw new Error( 'factory must be a function for: ' + moduleId );
		}

		if ( this.modules.indexOf( moduleId ) === -1 )
		{
			this.modules[moduleId]	= {
				element			: undefined,
				dependencies	: dependencies,
				factory			: factory
			};
		}
		else
		{
			throw new Error( 'Module ' + moduleId + ' already defined' );
		}
	};

	getDependencies( moduleId )
	{
		let dependencies	= [];
		let module			= this.modules[moduleId];

		for ( let key in module.dependencies )
		{
			dependencies.push( this.require( module.dependencies[key] ) );
		}

		return dependencies;
	};
}

const instance	= new _Sc();

function require( moduleId )
{
	return instance.require( moduleId );
}

function define( moduleId, dependencies, factory )
{
	instance.define( moduleId, dependencies, factory );
}
