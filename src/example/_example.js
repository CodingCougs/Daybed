import Help from './example';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import * as Actions from './example-actions';


function mapStateToProps(state){
    return {
        help: state.exampleReducer
    }
}


function mapDispatchToProps(dispatch){
    
    return bindActionCreators({

        setActiveAccordion: Actions.setActiveAccordion

    }, dispatch);


}

export default connect(mapStateToProps, mapDispatchToProps)(Help);