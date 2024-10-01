function useSubject(initialState) {
    return {
        _observers: [],
        _state: initialState,
        getState() { 
            return JSON.parse(JSON.stringify(this._state)); 
        },
        setState(state) { 
            this._state = Object.freeze(state);

            this.notifyObservers();
        },
        addObserver(observer) {
            this._observers.push(observer);
        },
        notifyObservers() {
            for (const observer of this._observers) observer(this._state);
        }
    }
}