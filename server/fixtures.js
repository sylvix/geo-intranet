if ( Meteor.users.find().count() === 0 ) {
    Accounts.createUser({
        username: 'admin',
        password: 'admin'
    });
}

if ( GeoObjects.find().count() === 0 ) {
    GeoObjects.insert({
        type: 'Establishment',
        geo: {coordinates: [42.855329727246435,74.57519531250001]},
        title: 'University',
        danger_level: 5,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    });
    GeoObjects.insert({
        type: 'Establishment',
        geo: {coordinates: [42.85683979344514,74.58927154541017]},
        title: 'Bank',
        danger_level: 6,
        description: 'Suspendisse volutpat lorem et laoreet sodales.'
    });
    GeoObjects.insert({
        type: 'Transport',
        geo: {coordinates: [42.88829110747604,74.57107543945314]},
        title: 'Marshrutka',
        danger_level: 10,
        description: 'Maecenas interdum metus consequat lectus mollis.'
    });
    GeoObjects.insert({
        type: 'Transport',
        geo: {coordinates: [42.863886280785856,74.52575683593751]},
        title: 'Taxi',
        danger_level: 5,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    });
    GeoObjects.insert({
        type: 'Nature',
        geo: {coordinates: [42.86187308074836,74.60231781005861]},
        title: 'Pine forest',
        danger_level: 1,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    });
    GeoObjects.insert({
        type: 'Nature',
        geo: {coordinates: [42.867157590830914,74.59716796875001]},
        title: 'Alpine meadow',
        danger_level: 10,
        description: 'Donec placerat neque non nisl ullamcorper egestas..'
    });

}