import React from 'react';
import Run from './navigator'
import PageContainer from './pageContainer'
import {PageView,observer} from './pageview'
import {observable,extendObservable} from 'mobx'

/*
	todo.. babel-plugin-import 按需加载
	按照babel-plugin-import  每个引用都需要挪到components目录下 
*/
export {
	extendObservable,
	PageContainer,
	PageView,
	observable,
	observer,
	React,
	Run,
}