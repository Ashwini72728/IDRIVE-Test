import React, { Component } from "react";
import {
  Container
} from "reactstrap";

import { tagsList , tweetList } from "./../../store/actions/tags.action";
import { bindActionCreators } from "redux";
import { withRouter } from "react-router-dom";
import connect from "react-redux/es/connect/connect";
import DataTable from "react-data-table-component";

class Tags extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tagLists : [],
      tweets : []
    };
  }

  OnPropertyChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  componentDidMount() {
    this.props.tagsList();
  }

  componentWillReceiveProps = nextProps => {
    console.log(nextProps);
    if(nextProps.tagValues.tagsList.status=== 200){
       this.setState({tagLists: nextProps.tagValues.tagsList.data._embedded.tag})
    }
    if(nextProps.tagValues.tweets.status=== 200){
      this.setState({tweets: nextProps.tagValues.tweets.data._embedded.quotes})
   }
  };

  updateTweets = (e) => {
    console.log(e.tags);
    this.setState({tweets:''});
    this.props.tweetList(e.tags);
};
getExpand = (e) => {
  console.log(e);
};
  render() {
    const tweets = [];
      if(this.state.tweets){
        var obj = Object.keys(this.state.tweets);
            for (var i = 0; i < obj.length; i++) {
              tweets.push(
                this.state.tweets[i].value
            )
            }
      }
      console.log(tweets)
      const SampleExpandedComponent = ({ data }) => (
        <div>
          <h6>
          {tweets}
          </h6>

        </div>
      );

      const data = [];
      if(this.state.tagLists){
        var obj = Object.keys(this.state.tagLists);
            for (var i = 0; i < obj.length; i++) {
              data.push({
                tags: this.state.tagLists[i].value
            })
            }
      }
      const columns = [
        {
          name: "Tags",
          selector: "tags",
          sortable: true
        }
      ];
    return (
      <Container>
        <div style={{marginTop:"1%"}}>
          <div>
             <h3 style={{color:'white',justifyContent:'center',textAlign:'center'}}>Topics</h3>
          </div>
          <div style={{width:"50%", margin: 'auto'}}>
          <DataTable
              noHeader={true}
              columns={columns}
              data={data} 
              striped={true}
              highlightOnHover={true}
              onRowClicked = {e => this.updateTweets(e)}
              onRowExpandToggled = {this.getExpand(this)}
              expandableRowsHideExpander
              expandableRows
              expandableRowsComponent={<SampleExpandedComponent />}
              expandOnRowClicked
              pagination
              paginationPerPage={10}
              paginationTotalRows={data.length}
            />
          </div>            
        </div>
      </Container>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
        tagsList: tagsList,
        tweetList: tweetList
    },
    dispatch
  );
}

function mapStateToProps({ tags }) {
  return { 
           tagValues: tags ,
           tweetList: tags
          };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Tags));
