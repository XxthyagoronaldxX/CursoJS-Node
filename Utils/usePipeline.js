function usePipeline(...fns) {
    return (value) => fns.reduce((acc, fn) => fn(acc), value);
}