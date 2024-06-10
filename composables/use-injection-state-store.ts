export function useInjectionStateStore<S, A>(name: string, injectionStore: () => S & A | undefined, defaultValue?: S & A) {
    return () => {
        const store = injectionStore();
        if (defaultValue !== undefined && store === undefined) {
            return defaultValue;
        }

        if (store === undefined) {
            throw new Error(`Please provide a store for ${name}`);
        }

        return store;
    };
}
