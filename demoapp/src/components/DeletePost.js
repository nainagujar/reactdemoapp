import React from 'react';
import { connect } from 'react-redux' ;
import { deletePost} from '../actions' ;
import Modal from 'react-modal';


class DeletePost extends React.Component {
    deletePost = () => {
        this.props.deletePost(this.props.postid, (res) => {
            if (res.status === 200) {
                this.refs.delbtn.setAttribute("disabled", "disabled");   
                this.props.cancelPopup();
                setTimeout(function () { window.location.reload() }, 3000);
            }
            else {
                this.props.cancelPopup();
               
            }
        })
    }


    render() {
        console.log(this.props,'popup');
        const { popupState, cancelPopup } = this.props
        return (
            <div>
                <Modal isOpen={popupState} onClose={() => { }} center showCloseIcon={false} >
                    <h2>Confirm to delete this post?</h2>
                    <button className='ui button' onClick={cancelPopup}>CANCEL</button>
                    <button ref='delbtn' className='ui negative button' onClick={this.deletePost}>DELETE</button>
                </Modal>
            </div>
        );


    }
}

export default connect(null,{deletePost})(DeletePost);
    