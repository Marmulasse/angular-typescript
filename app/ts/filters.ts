module app.filters {

    /* Filters */

    export class Checkmark {
        static filter() {
            return (input:string)=> {
                return input ? '\u2713' : '\u2718'
            };
        }
    }

}

import Checkmark = app.filters.Checkmark;
angular.module('phonecatFilters', []).filter('checkmark', Checkmark.filter);
