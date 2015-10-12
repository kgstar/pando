var React = require('react');
var DateTimePicker = require('react-widgets').DateTimePicker

var FormHeaderEdit = React.createClass({
  render: function() {
    return (
      <div className="block-body">
        <div className="form-group">
          <div className="col-xs-6">
            <label>Title</label>
            <input type="text" className="form-control" />
          </div>
          <div className="col-xs-6">
            <label>Description</label>
            <input type="text" className="form-control" />
          </div>
        </div>
        <div className="form-group">
          <div className="col-xs-6">
            <div className="row">
              <div className="col-xs-6">
                <label>From</label>
                <div className="input-group">
                  <DateTimePicker time={false}/>
                </div>
              </div>
              <div className="col-xs-6">
                <label>To</label>
                <div className="input-group">
                  <DateTimePicker time={false}/>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="form-group">
          <div className="col-xs-6">
            <label>Who is approving this</label>
            <select className="form-control selectpicker">
              <option>Select</option>
              <option>Ziwei Zhou</option>
              <option>Takashi Obatake</option>
              <option>Audrey Pang</option>
            </select>
          </div>
          <div className="col-xs-6">
            <label>Who is this request for </label>
            <select className="form-control selectpicker">
              <option>Select</option>
              <option>Ziwei Zhou</option>
              <option>Takashi Obatake</option>
              <option>Audrey Pang</option>
            </select>
          </div>
        </div>
        <div className="form-group">
          <div className="col-xs-12">
            <div className="pull-left">
              <a href="javascript:void(0);" className="btn btn-sm btn-primary">Submit for Approval</a>
              <a href="javascript:void(0);" className="btn btn-sm btn-orange">Save as Draft</a>
              <a href="javascript:void(0);" className="btn btn-link link-gray" onClick={this.props.toggleEdit}>Cancel</a>
            </div>
            <div className="pull-right">
              <a href="javascript:void(0);" className="btn btn-link link-gray"><i className="pi pi-trash-o text-danger"></i>Delete Request</a>
            </div>
          </div>
        </div>
        <div className="form-group">
          <div className="col-xs-12">
            <div className="confirm-submission">
              <div className="row">
                <div className="col-xs-6">
                  <input type="text" className="form-control" placeholder="Enter Your Full Name as Signature" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="form-group">
          <div className="col-xs-12">
            <label className="checkbox-inline"><input type="checkbox" className="pull-left" />
            I declare that the above expenses have been reasonably and actually
            incurred by me in fulfilling my responsibilities as an employee of Fitch.
            </label>
          </div>
        </div>
        <div className="form-group">
          <div className="col-xs-12">
            <button type="submit" className="btn btn-sm btn-green">Confirm and Submit</button>
          </div>
        </div>

        <div className="dropdown">
          <a className="dropdown-toggle" href="javascript:void(0)">
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

module.exports = FormHeaderEdit;
