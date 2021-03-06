/* Copyright (c) 2016 terrestris GmbH & Co. KG
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
/**
 * Panel where the documents should be uploaded via form submit to the
 * backend
 *
 * @class MoMo.client.view.window.document.DocumentPdfUpload
 */
Ext.define("MoMo.client.view.window.document.DocumentPdfUpload",{
    extend: "Ext.window.Window",
    xtype: "momo-document-pdf-upload",

    controller: 'window.document.documentpdfupload',

    viewModel: 'window.document.documentpdfupload',

    collapsible: false,

    collapsed: false,

    layout: 'auto',

    modal: true,

    rec: null,

    bind: {
        title: '{title}'
    },

    items: [{
        xtype: 'form',
        border: false,
        bodyPadding: 10,
        frame: true,
        layout: {
            type: 'vbox',
            pack: 'center'
        },
        items: [{
            xtype: 'fileuploadfield',
            name: 'file',
            width: 300,
            labelWidth: 30,
            msgTarget: 'side',
            allowBlank: false,
            anchor: '100%',
            bind: {
                emptyText: '{choosePdfPlaceholderText}'
            }
        }, {
            xtype: 'hiddenfield',
            name: '_csrf',
            value: BasiGX.util.CSRF.getValue()
        }],
        buttons: [{
            bind: {
                text: '{uploadBtnText}'
            },
            formBind: true,
            handler: 'onUploadBtnClick'
        }]

    }],

   /**
    *
    */
    initComponent: function() {
        var me = this;

        // call parent
        me.callParent();
    }
});
