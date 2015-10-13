var React = require('react');
var DateTimePicker = require('react-widgets').DateTimePicker

var ExpenseField = React.createClass({
  render: function() {
    var rows = [];
    for (var i=0; i < 3; i++) {
      rows.push(
        <tr ng-click="editTask(ct)" className="edit-task">
          <td><i className="pi pi-check-circle-o"></i></td>
          <td>1/12/2015</td>
          <td><span>Category Name</span></td>
          <td>Memo</td>
          <td className="amount"><span>$100.00</span><br/>
            <span className="text-muted">$100.00@1.0000</span>
            <a className="td-edit" href="javascript:"></a>
          </td>
        </tr>
      );
      rows.push(
        <tr className="form-row-edit" ng-show="hasEditing">
          <td colSpan="5">
            <div className="block block-secondary">
              <form>
                <div className="form-group">
                  <div className="col-xs-3">
                    <label><span className="translation_missing" title="translation missing: en.visitors.form_row_edit.date">Date</span></label>
                    <DateTimePicker time={false} format="yyyy-MM-dd"/>
                  </div>
                  <div className="col-xs-3">
                    <label><span className="translation_missing" title="translation missing: en.visitors.form_row_edit.expense_type">Expense Type</span></label>
                    <select className="form-control selectpicker" data-container="body" ng-model="editingTask.details.category" ng-options="expense.value as expense.label for expense in expenseTypeList">
                      <option value=""><span className="translation_missing" title="translation missing: en.visitors.form_row_edit.select">Select</span></option>
                    </select>
                  </div>
                  <div className="col-xs-3">
                    <label><span className="translation_missing" title="translation missing: en.visitors.form_row_edit.purpose">Purpose</span></label>
                    <select className="form-control selectpicker" ng-model="editingTask.details.purpose" ng-options="purpose.value as purpose.label for purpose in purposeList">
                      <option value=""><span className="translation_missing" title="translation missing: en.visitors.form_row_edit.select_one">Select One</span></option>
                    </select>
                  </div>
                  <div className="col-xs-3">
                    <label><span className="translation_missing" title="translation missing: en.visitors.form_row_edit.payment_type">Payment Type</span></label>
                    <select className="form-control selectpicker" ng-model="editingTask.details.payment" ng-options="payment.value as payment.label for payment in paymentTypeList">
                      <option value=""><span className="translation_missing" title="translation missing: en.visitors.form_row_edit.select">Select</span></option>
                    </select>
                  </div>
                </div>
                <div className="form-group">
                  <div className="col-xs-2">
                    <label className="currency"><span className="translation_missing" title="translation missing: en.visitors.form_row_edit.currency">Currency</span></label>
                    <select className="form-control selectpicker" data-container="body" ng-model="editingTask.details.currency" ng-options="currency.value as currency.label for currency in currencyList">
                      <option value=""><span className="translation_missing" title="translation missing: en.visitors.form_row_edit.select">Select</span></option>
                    </select>
                  </div>
                  <div className="col-xs-2">
                    <label><span className="translation_missing" title="translation missing: en.visitors.form_row_edit.rate">Rate</span></label>
                    <input type="text" className="form-control" ng-model="editingTask.details.rate"/>
                  </div>
                  <div className="col-xs-2">
                    <label><span className="translation_missing" title="translation missing: en.visitors.form_row_edit.amount">Amount</span></label>
                    <input type="text" className="form-control" ng-model="editingTask.details.amount"/>
                  </div>
                  <div className="col-xs-6">
                    <label><span className="translation_missing" title="translation missing: en.visitors.form_row_edit.attachment">Attachment</span></label>
                    <div className="input-file" ng-file-select ng-multiple="true" ng-file-change="onFileSelect($files)">
                      <span className="custom-file-name">--fileUploadName--</span>
                      <span className="btn btn-sm btn-upload">
                        <span className="translation_missing" title="translation missing: en.visitors.form_row_edit.upload">Upload</span>
                      </span>
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="col-xs-12">
                      <label><span className="translation_missing" title="translation missing: en.visitors.form_row_edit.memo">Memo</span></label>
                      <textarea rows="2" className="form-control" ng-model="editingTask.details.memo"></textarea>
                    </div>
                  </div>
                  <div className="form-group mb0">
                    <div className="col-xs-12">
                      <div className="pull-left">
                        <button type="submit" className="btn btn-sm btn-primary" ng-click="updateEditingTask(editingTask.id)" ng-hide="editingTask.workflow_state == 'paid'">Save</button>
                        <button className="btn btn-sm btn-green" ng-show="editingTask.workflow_state == 'pending'" ng-click="paidExpenseDetail(editingTask.id)">
                          <span className="translation_missing" title="translation missing: en.visitors.form_row_edit.paid">Paid</span>
                        </button>
                        <a href="javascript:;" className="btn link-gray btn-link link-cancel" ng-click="cancelEditing()">Cancel</a>
                      </div>
                      <div className="pull-right">
                        <a className="btn btn-link link-gray btn-delete-entry" href="javascript:;" ng-click="deleteDetailTask(editingTask.id)" ng-hide="editingTask.workflow_state == 'paid'">
                          <i className="pi pi-trash-o text-danger"></i>
                          <span className="translation_missing" title="translation missing: en.visitors.form_row_edit.delete_entry">Delete Entry</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </td>
        </tr>
      );
    }
    return (
      <div className="expense-detail">
        <div className="fade" active-class="in alert" flash-alert="success">
          <span className="alert-message"></span>
        </div>
        <div className="action-menu">
          <div className="pull-left">
            <form className="form-inline">
              <div className="form-group mb0"><label><span className="translation_missing" title="translation missing: en.visitors.static_expense_detail.filter_by">Filter By</span></label> <select className="form-control" ng-model="sortBy" ng-options="filter.value as filter.label for filter in filterExpenseList" ng-change="sortTask()">
              </select></div>
            </form>
          </div>
          <div className="btn-group pull-right"><button className="btn btn-default active pi pi-table" type="button"></button> <button className="btn btn-default pi pi-spinner" type="button"></button></div>
        </div>
        <div className="table-view no-border">
          <table id="expense-detail-table" className="table table-bordered" ng-table="tableTaskParams" template-pagination="custom/pager">
            <thead>
              <tr>
                <th><span className="translation_missing" title="translation missing: en.visitors.static_expense_detail.status">Status</span></th>
                <th><span className="translation_missing" title="translation missing: en.visitors.static_expense_detail.date">Date</span></th>
                <th><span className="translation_missing" title="translation missing: en.visitors.static_expense_detail.category">Category</span></th>
                <th><span className="translation_missing" title="translation missing: en.visitors.static_expense_detail.description">Description</span></th>
                <th className="text-right"><span class="translation_missing" title="translation missing: en.visitors.static_expense_detail.amount">Amount</span></th>
              </tr>
            </thead>
            <tbody>
             {rows}
            </tbody>
          </table>
        </div>
        <div className="dropdown">
          <a className="dropdown-toggle" href="javascript:alert('Add New Entry');">
            <i className='pi pi-plus'></i>
            <span className="translation_missing" title="translation missing: en.visitors.static_expense_detail.add_new_entry">Add New Entry</span>
            <i className='pi pi-arrow-drop-down'></i>
          </a>
          <div className="dropdown-menu">
            <div className="arrow"></div>
            <ul>
              <li ng-click="newEntryManual()">
                <a href="javascript:void(0)">
                  <span className="translation_missing" title="translation missing: en.visitors.static_expense_detail.manual_entry">Manual Entry</span>
                </a>
              </li>
              <li ng-click="newEntryImport()">
                <a href="javascript:void(0)">
                  <span className="translation_missing" title="translation missing: en.visitors.static_expense_detail.import">Import</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
});
module.exports = ExpenseField;
