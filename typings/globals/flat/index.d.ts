// Generated by typings
// Source: https://raw.githubusercontent.com/DefinitelyTyped/DefinitelyTyped/7de6c3dd94feaeb21f20054b9f30d5dabc5efabd/flat/flat.d.ts
declare namespace FlatTypes {
	interface FlattenOptions {
		delimiter?: string;
		safe?: boolean;
		maxDepth?: number;
	}

	interface Flatten {
		<TTarget, TResult>(
			target: TTarget,
			options?: FlattenOptions
		): TResult;

		flatten: Flatten;
		unflatten: Unflatten;
	}

	interface UnflattenOptions {
		delimiter?: string;
		object?: boolean;
		overwrite?: boolean;
	}

	interface Unflatten {
		<TTarget, TResult>(
			target: TTarget,
			options?: UnflattenOptions
		): TResult;
	}
}

declare module "flat" {
	var flatten: FlatTypes.Flatten;

	export = flatten;
}