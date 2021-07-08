using Microsoft.AspNetCore.Mvc;
using Kendo.Mvc.UI;
using Kendo.Mvc.Extensions;
using SmartIT.Employee.MockDB;


namespace kendo_ui_vue_demo_aspnetcore_data.Controllers
{

    [Produces("application/json")]
    [Route("api/Employee")]
    public class EmployeeController : Controller
    {
        private readonly IEmployeeRepository _employeeRepository;
        public EmployeeController(IEmployeeRepository employeeRepository)
        {
            _employeeRepository = employeeRepository;
        }
        // GET: api/Employee
        [HttpGet]
        public JsonResult GetEmployee([DataSourceRequest] DataSourceRequest request)
        {
            // ToDataSourceResult works with IQueryable and thus Entity Framework could be used as a source
            // instead of an in-memory list.
            var employees = _employeeRepository.GetAll();
            return Json(employees.ToDataSourceResult(request));
        }
        // POST: api/Employee
        [HttpPost]
        public JsonResult AddEmployee([DataSourceRequest] DataSourceRequest request, Employee employee)
        {
            // ToDataSourceResult works with IQueryable and thus Entity Framework could be used as a source
            // instead of an in-memory list.
            _employeeRepository.Add(employee);
            var employees = _employeeRepository.GetAll();
            return Json(employees.ToDataSourceResult(request));
        }
        // PUT: api/Employee
        [HttpPut]
        public JsonResult UpdateEmployee([DataSourceRequest] DataSourceRequest request, Employee employee)
        {
            // ToDataSourceResult works with IQueryable and thus Entity Framework could be used as a source
            // instead of an in-memory list.

            var test = _employeeRepository.Update(employee);
            var employees = _employeeRepository.GetAll();
            return Json(employees.ToDataSourceResult(request));
        }
        // DELETE: api/Employee
        [HttpDelete]
        public JsonResult DeleteEmployee([DataSourceRequest] DataSourceRequest request, Employee employee)
        {
            // ToDataSourceResult works with IQueryable and thus Entity Framework could be used as a source
            // instead of an in-memory list.
            var findEmployee = _employeeRepository.FindbyId(employee.Id);
            _employeeRepository.Delete(findEmployee);
            var employees = _employeeRepository.GetAll();
            return Json(employees.ToDataSourceResult(request));
        }
    }
}
