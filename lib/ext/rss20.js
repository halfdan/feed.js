// Currently ignored: skipDays, skipHours, cloud
module.exports = {
    ns: '',
    nsURL: '',
    channel: {
        title: {required: true, type: 'cdata'},
        link: {required: true, type: 'url'},
        description: {required: true, type: 'cdata'},
        language: {type: 'cdata', default: 'en-us'},
        copyright: {type: 'cdata'},
        managingEditor: {type: 'email'},
        webMaster: {type: 'email'},
        pubDate: {type: 'rfc822'},
        lastBuildDate: {type: 'rfc822', default: function () { return new Date().toGMTString(); }},
        category: {}, // ToDo
        generator: {type: 'string'},
        docs: {type: 'url'},
        cloud: {}, // ToDo
        ttl: {type: 'number'},
        image: {type: 'string'}
    },
    item: {
        title: {required: true, type: 'cdata'},
        link: {required: true, type: 'url'},
        description: {required: true, type: 'cdata'},
        author: {},
        category: {},
        comments: {},
        enclosure: {
            attributes: {
                url: {required: true},
                length:{required: true, type: 'number'},
                type: {required: true}
            }
        },
        guid: {
            attributes: {isPermalink:{type: 'string'}}
        },
        pubDate: {type: 'rfc822'}
    }
};


