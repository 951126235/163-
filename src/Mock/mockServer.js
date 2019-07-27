// mock数据接口

import Mock from "mockjs"

import homeData from './homeData.json'
import classflyData from './classflyData.json'
import classflyListData from './classflyListData.json'

Mock.mock('/homeData', {
  code: 0,
  data: homeData
});
Mock.mock('/calssflyData', {
  code: 0,
  data: classflyData
});
Mock.mock('/classflyListData', {
  code: 0,
  data: classflyListData
});

console.log('启动了');
