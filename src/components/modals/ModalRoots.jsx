import React, { Component } from 'react';
import ModalCustom from './ModalCustom';
import { ModalsContext } from './ModalProvider';

class ModalRoots extends Component {
    onClose = (item) => {
        this.props.closeModal(item)
    }

    render() {
        return (
            <div className="modals">
                <ModalsContext.Consumer>
                    {
                        context => {
                            return context.modals.map((item, i) => {
                                return (<ModalCustom item={item} key={i} zIndex={i} onClose={(data) => {
                                    context.hideModal(item.modalId);
                                }}></ModalCustom>)
                            });
                        }
                    }
                </ModalsContext.Consumer>
            </div>
        );
    }
}

export default ModalRoots;
