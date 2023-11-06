import React from 'react';

export const ModalsContext = React.createContext(
   {
       modals:[],
       showModal: null,
       hideModal: null
   }
);

export class ModalProvider extends React.Component{
    constructor(props){
        super(props)
    }

    showModal = (modal) =>{
        if(!modal.modalId){
            const id = new Date().getTime();
            modal.modalId = `modal_${id}`;
        }
        this.setState({
            ...this.state,
            modals: this.state.modals.concat(modal)
        });
    }

    hideModal = (id)=>{
        this.setState({
            ...this.state,
            modals: this.state.modals.filter(item => item.modalId !== id),
        });
    }

    hideModalAll = () => {
        this.setState({
            ...this.state,
            modals:[],
        });
    }

    state = {
        modals: [],
        showModal: this.showModal,
        hideModal: this.hideModal,
        hideModalAll: this.hideModalAll
    }

    render() {
        return (
            <ModalsContext.Provider value={this.state}>
                {this.props.children}
            </ModalsContext.Provider>
        )
    }
}

export const withModal = Component => props => {
    const modalCtx = React.useContext(ModalsContext);
    return (
        <Component {...props} showModal={modalCtx.showModal} hideModal={modalCtx.hideModal} hideModalAll={modalCtx.hideModalAll} />
    );
}
