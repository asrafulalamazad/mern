import React from 'react';
import TodoPage from "./pages/TodoPage";
import CounterPage from "./pages/CounterPage";

const App = () => {
    return (
        <div>
            <p className="h1 tex-bg-danger text-center text-bg-secondary">Welcome Bangladesh</p>
            <TodoPage/>
            {/*<CounterPage/>*/}
        </div>
    );
};

export default App;