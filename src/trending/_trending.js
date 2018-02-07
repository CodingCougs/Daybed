import Trending from './trending';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as trendingActions from './trending_actions';


function mapStateToProps(state){
    return {
        trendingReducer: state.trendingReducer,
    }
}


function mapDispatchToProps(dispatch){

    return bindActionCreators({
        getGifs: trendingActions.getGifs,

    }, dispatch);


}

export default connect(mapStateToProps, mapDispatchToProps)(Trending);