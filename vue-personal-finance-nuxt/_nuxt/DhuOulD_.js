import{d as a,au as t,b8 as e,W as i,B as s,Q as n,al as o}from"./CoVIVF5Y.js";/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */const d=a({name:"KendoCard",props:{dir:String,type:{type:String,default:e.DEFAULT,validator:function(r){return["default","primary","info","success","warning","error"].includes(r)}},orientation:{type:String,default:t.VERTICAL,validator:function(r){return["horizontal","vertical"].includes(r)}}},created(){n(o)},computed:{wrapperClass(){const r=this.$props.orientation!==t.HORIZONTAL?"vertical":"horizontal";return{"k-card":!0,[`k-card-${this.$props.type}`]:this.$props.type!==e.DEFAULT,[`k-card-${r}`]:!0}}},render(){const r=i(this);return s("div",{dir:this.$props.dir,class:this.wrapperClass},[r])}});export{d as u};
