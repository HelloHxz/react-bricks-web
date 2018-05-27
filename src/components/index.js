
import 'babel-polyfill'
import React from 'react';
import Run from './navigator'
import Views from './views'
import Menu from './Menu';
import Select from './select';
import Modal from './modal';
import Row from './row';
import Button from './button';
import Col from './col';
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
	Button,
	Form,
	Col,
	Modal,
	Dynamic,
	Row,
	PopView,
	Select,
	Input,
	extendObservable,
	Views,
	globalManager,
	PageView,
	observable,
	React,
	Run,
}