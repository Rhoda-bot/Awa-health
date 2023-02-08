import React from 'react';

const DonatModal = () => {
    return(
        <>
            <div className="modal fade modal-dialog-centered" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                       <p>Do you have specific Causes you want to donate for?</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-primary">Yes</button>
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">No</button>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default DonatModal;