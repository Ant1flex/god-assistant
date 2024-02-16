import Modal from 'react-modal'

import "./confirm.css"

function ConfirmModal({ modalConfigs, onClose, onConfirm }) {
    return (
        <div className="confirm">
            <Modal
                overlayClassName={"confirmWrapper"}
                className={"confirmContent"}
                closeTimeoutMS={200}
                ariaHideApp={false}
                isOpen={modalConfigs.show}
                onRequestClose={() => { onClose() }}
            >
                <div className='confirmDescription'>{modalConfigs.description}</div>
                <div className="confirmBtnContainer">
                    <div className="confirmBtnWrapper">
                        <button className='confirmBtn' onClick={() => {
                            onConfirm()
                            onClose()
                        }}>
                            Yes
                        </button>
                    </div>
                    <div className="confirmBtnWrapper">
                        <button className='confirmBtn' onClick={() => { onClose() }}>No</button>
                    </div>
                </div>
            </Modal>
        </div>
    );
}

export default ConfirmModal;