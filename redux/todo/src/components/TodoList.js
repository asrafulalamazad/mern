import React from 'react';

const TodoList = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-12">
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>Serial No</th>
                                <th>Task Name</th>
                                <th>Edit</th>
                                <th>Remove</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>go to office</td>
                                <td><button className="btn btn-primary">Edit</button></td>
                                <td><button className="btn btn-danger">Remove</button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            
        </div>
    );
};

export default TodoList;