
import 'babel-polyfill'
import React from 'react';
import Run from './navigator'
import RouteView from './routeview'
import Menu from './Menu';
import Select from './select';
import Modal from './modal';
import Row from './row';
import message from './message';
import Button from './button';
import VBox from './vbox';
import Col from './col';
import HBox from './hbox';
import Popover from './popover';
import PageView from './pageview'
import PopView from './popview'
import Dynamic from './dynamic'
import XZ from './xz';
import Tooltip from './tooltip';
import Input from './input';
import Form from './form';
import {observable,extendObservable} from 'mobx'
/*
	todo.. babel-plugin-import 按需加载
	按照babel-plugin-import  每个引用都需要挪到components目录下 
*/
export {
	Menu,
	XZ,
	VBox,
	HBox,
	Button,
	message,
	Popover,
	Tooltip,
	Form,
	Col,
	Modal,
	Dynamic,
	Row,
	PopView,
	Select,
	Input,
	extendObservable,
	RouteView,
	PageView,
	observable,
	React,
	Run,
}