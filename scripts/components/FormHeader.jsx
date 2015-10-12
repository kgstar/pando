var React = require('react');

var FormHeader = React.createClass({
  render: function() {
    return (
      <div class="col-xs-6">
        <span className="circle-icon icon-money"></span>
        <span className="circle-icon icon-suitcase hide"></span>
        <span className="circle-icon icon-medical hide"></span>
        <a className="link-gray pull-right link-edit">
          <i className='pi pi-edit'></i>
          <span className="translation_missing" title="translation missing: en.visitors.static_show_expense_detail.edit">Edit</span>
        </a>
        <h2>Expense Task</h2>
        <span className="task-detail-description">Task Description</span><br/>
        <span className="task-detail-duration">01/01/2015 <span className="translation_missing" title="translation missing: en.visitors.static_show_expense_detail.to">To</span> 01/01/2015</span><br/>
        <h4 className="status-label"><span className="label label-pending">PENDING</span></h4>
        <div className="attributes">
          <span><i className="pi pi-clock"></i> 2 minutes ago</span>
          <span><i className="pi pi-person"></i> <span className="translation_missing" title="translation missing: en.visitors.static_show_expense_detail.submitted_by">Submitted By</span>
            <a href="#">Author</a>
          </span>
          <span><i className="pi pi-person"></i> <span className="translation_missing" title="translation missing: en.visitors.static_show_expense_detail.assigned_to">Assigned To</span>
            <a href="#">Assignee</a>
          </span>
          <span><i className="pi pi-person"></i> <span className="translation_missing" title="translation missing: en.visitors.static_show_expense_detail.request_for">Request For</span>
            <a href="#">User</a>
          </span>
        </div>
      </div>
    );
  }
});

module.exports = FormHeader;
