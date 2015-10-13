var React = require('react');

var Activities = React.createClass({
  render: function() {
    return (
      <div>
        <h2><span className="translation_missing" title="translation missing: en.visitors.static_show_expense_detail.activities">Activities</span></h2>
        <div className="row">
          <div className="col-xs-10 col-xs-offset-2">
            <div className="activities">
              <form className="comment-input">
                <div className="form-group">
                  <textarea type="text" className="form-control" rows= "4" ng-model="comment"></textarea>
                </div>
                <div className="clearfix">
                  <div className="btn btn-primary pull-left" ng-click="submitComment()"><span class="translation_missing" title="translation missing: en.visitors.static_show_expense_detail.send">Send</span></div>
                  <div className="input-file input-file-link pull-right">
                    <a href="javascript:void(0);" ng-file-select ng-multiple="true" ng-file-change="uploadAttachment($files)"><i className="pi pi-paperclip"></i> Attach File</a>
                  </div>
                </div>
              </form>
              <div className="activities-msg">
                <div className="activity">
                  <div className="avatar">
                    <span className="timestamp">2 minutes ago</span>
                    <div className="avatar-img">
                      <img alt="Img avatar default" className="img-circle" src="assets/img-avatar-default.png"/>
                      <div className="avatar-initials">JD</div>
                    </div>
                  </div>
                  <div className="block block-default no-border">
                    <span ng-if="activity.key == 'task.attachment.add'" ng-bind-html="translate('tasks.attachment_uploaded', {url: activity.parameters.data, file_name: activity.parameters.name}) | to_trusted"></span>
                    <span ng-if="activity.key == 'task.approved' || activity.key == 'task.cancelled'"></span>
                    <span ng-if="activity.key == 'task.newcomment'" ></span>
                  </div>
                </div>
                <div className="text-center">
                  <button className="btn btn-md btn-secondary show-more" type="button" ng-click="getShowableActivities(1)" ng-show="showableActivities.length > 0 && showableActivities.length < totalActivitiesCount">
                    <span className="translation_missing" title="translation missing: en.visitors.static_show_expense_detail.show_all_activities">Show All Activities</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Activities;
