/**
 * ViePrivee
 * Copyright (C) 2015  Juan David CRUZ-GOMEZ
 * juandavidcruz@gmail.com
 * 
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.

 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.

 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
 
/**
 * Created by juancrug on 4/8/15.
 */

'use strict';

angular
    .module('viePrivee.main')
    .service('ConnData', ['$resource', function ConnData($resource){
        return $resource('/api/Base/:method', {dataID: '@id'}, {
            'retrieve'    :   {method: 'GET', params:{method: 'retrieve'}},
            'check'    :   {method: 'GET', params:{method: 'check'}}
        });
    }]);
