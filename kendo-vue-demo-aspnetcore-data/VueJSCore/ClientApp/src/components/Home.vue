<template>
        <div>
            <h1>Binding a Kendo UI for Vue Native Grid with ToDataSourceResult()</h1>
            <p>The application is built with:</p>
            <ul>
                <li><a href='https://get.asp.net/'>ASP.NET Core</a> and <a href='https://msdn.microsoft.com/en-us/library/67ef8sbd.aspx'>C#</a> for cross-platform server-side code</li>
                <li><a href='https://vuejs.org/'>Vue.js</a> for client-side code</li>
                <li><a href='https://webpack.github.io/'>Webpack</a> for building and bundling client-side resources</li>
                <li><a href='http://www.telerik.com/kendo-vue-ui/'>Kendo UI for Vue</a> for layout and styling</li>
            </ul>
            <p>Kendo UI - related configuration</p>
            <ul>
                <li><strong>Web API endpoint, parsing the requests and returning the response using the Kendo UI for ASP.NET MVC DataSourceRequest and ToDataSourceResult()</strong>. For more information about including Kendo UI in an ASP.NET Core project, refer to <a href='http://docs.telerik.com/aspnet-core/getting-started/getting-started#getting-started-with-telerik-ui-for-aspnet-core'>this article</a>.</li>
                <li><strong>Kendo UI for Vue Native Grid</strong> documentation is available <a href='http://www.telerik.com/kendo-vue-ui/components/grid/'>here</a>.</li>
                <li><strong>Kendo UI for Vue DataQuery</strong> <a href='http://www.telerik.com/kendo-vue-ui/components/dataquery/api/toDataSourceRequestString/'>toDataSourceRequestString()</a> method converts the request into string, comparable with UI for ASP.NET MVC <strong>DataSourceRequest</strong> format.</li>
            </ul>
        </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style scoped>
    p, ul {
        text-align: left;
        margin-left: 30px;
    }
    a {
        color: #42b983;
    }
</style>
