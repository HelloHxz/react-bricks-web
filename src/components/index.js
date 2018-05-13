
import 'babel-polyfill'
import React from 'react';
import Run from './navigator'
import PageContainer from './pageContainer'
import Menu from './Menu';
import Select from './select';
import globalManager from './globalManager'
import PageView from './pageview'
import PopView from './popview'
import Dynamic from './dynamic'
import Input from './input';
import Form from './form';
import {observable,extendObservable} from 'mobx'
/*
	todo.. babel-plugin-import 按需加载
	按照babel-plugin-import  每个引用都需要挪到components目录下 
*/
export {
	Menu,
	Form,
	Dynamic,
	PopView,
	Select,
	Input,
	extendObservable,
	PageContainer,
	globalManager,
	PageView,
	observable,
	React,
	Run,
}