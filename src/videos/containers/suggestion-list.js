/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {FlatList, Text} from 'react-native';
import Layout from '../components/suggestion-list-layout';
import Empty from '../components/empty';
import Separator from '../components/vertical-separator';
import Suggestion from '../components/suggestion';
class SuggestionList extends Component {
  renderEmpty = () => <Empty text="no hay sugerencias"></Empty>;
  ItemSeparator = () => <Separator />;
  Itemrend = ({item})=>{return (<Suggestion {...item}/>);}
  render() {
    const list = [
      {
        title: 'AVENGERS',
        key: '1',
      },
      {
        title: 'SUPERMAN',
        key: '2',
      },
    ];
    return (
      <Layout title="Recomendado para ti">
        <FlatList data={list}ListEmptyComponent={this.renderEmpty} ItemSeparatorComponent={this.ItemSeparator} renderItem={this.Itemrend} />
      </Layout>
    );
    }
}
export default SuggestionList;
