/*
Copyright 2015 OpenMarket Ltd

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

/*
 * THIS FILE IS AUTO-GENERATED
 * You can edit it you like, but your changes will be overwritten,
 * so you'd just be trying to swim upstream like a salmon.
 * You are not a salmon.
 */

var skin = {};

// Vector-specific stuff
skin['elements.Spinner'] = require('../../components/views/elements/Spinner');
skin['elements.ImageView'] = require('../../components/views/elements/ImageView');
skin['messages.MessageTimestamp'] = require('../../components/views/messages/MessageTimestamp');
skin['rooms.RoomTile'] = require('../../components/views/rooms/RoomDNDView');

// TODO: Fix this so matrix-react-sdk stuff is in react SDK skindex?
skin['avatars.RoomAvatar'] = require('matrix-react-sdk/lib/components/views/avatars/RoomAvatar');
skin['avatars.MemberAvatar'] = require('matrix-react-sdk/lib/components/views/avatars/MemberAvatar');

skin['settings.EnableNotificationsButton'] = require('matrix-react-sdk/lib/components/views/settings/EnableNotificationsButton');
skin['settings.ChangeAvatar'] = require('matrix-react-sdk/lib/components/views/settings/ChangeAvatar');
skin['settings.ChangeDisplayName'] = require('matrix-react-sdk/lib/components/views/settings/ChangeDisplayName');
skin['settings.ChangePassword'] = require('matrix-react-sdk/lib/components/views/settings/ChangePassword');

skin['elements.EditableText'] = require('matrix-react-sdk/lib/components/views/elements/EditableText');
skin['elements.ProgressBar'] = require('matrix-react-sdk/lib/components/views/elements/ProgressBar');
skin['elements.UserSelector'] = require('matrix-react-sdk/lib/components/views/elements/UserSelector');

skin['messages.TextualEvent'] = require('matrix-react-sdk/lib/components/views/messages/TextualEvent');
skin['messages.MessageEvent'] = require('matrix-react-sdk/lib/components/views/messages/MessageEvent');
skin['messages.MFileBody'] = require('matrix-react-sdk/lib/components/views/messages/MFileBody');
skin['messages.MImageBody'] = require('matrix-react-sdk/lib/components/views/messages/MImageBody');
skin['messages.MVideoBody'] = require('matrix-react-sdk/lib/components/views/messages/MVideoBody');
skin['messages.TextualBody'] = require('matrix-react-sdk/lib/components/views/messages/TextualBody');
skin['messages.UnknownBody'] = require('matrix-react-sdk/lib/components/views/messages/UnknownBody');

skin['rooms.MemberInfo'] = require('matrix-react-sdk/lib/components/views/rooms/MemberInfo');
skin['rooms.RoomHeader'] = require('matrix-react-sdk/lib/components/views/rooms/RoomHeader');
skin['rooms.RoomSettings'] = require('matrix-react-sdk/lib/components/views/rooms/RoomSettings');
skin['rooms.MemberTile'] = require('matrix-react-sdk/lib/components/views/rooms/MemberTile');
skin['rooms.MessageComposer'] = require('matrix-react-sdk/lib/components/views/rooms/MessageComposer');
skin['rooms.EventTile'] = require('matrix-react-sdk/lib/components/views/rooms/EventTile');

skin['create_room.CreateRoomButton'] = require('matrix-react-sdk/lib/components/views/create_room/CreateRoomButton');
skin['create_room.Presets'] = require('matrix-react-sdk/lib/components/views/create_room/Presets');
skin['create_room.RoomAlias'] = require('matrix-react-sdk/lib/components/views/create_room/RoomAlias');

skin['voip.CallView'] = require('matrix-react-sdk/lib/components/views/voip/CallView');
skin['voip.IncomingCallBox'] = require('matrix-react-sdk/lib/components/views/voip/IncomingCallBox');
skin['voip.VideoView'] = require('matrix-react-sdk/lib/components/views/voip/VideoView');
skin['voip.VideoFeed'] = require('matrix-react-sdk/lib/components/views/voip/VideoFeed');



// Old style stuff
skin['molecules.BottomLeftMenu'] = require('./views/molecules/BottomLeftMenu');
skin['molecules.BottomLeftMenuTile'] = require('./views/molecules/BottomLeftMenuTile');
skin['molecules.DateSeparator'] = require('./views/molecules/DateSeparator');
skin['molecules.MatrixToolbar'] = require('./views/molecules/MatrixToolbar');
skin['molecules.MessageContextMenu'] = require('./views/molecules/MessageContextMenu');
skin['molecules.RoomCreate'] = require('./views/molecules/RoomCreate');
skin['molecules.RoomDropTarget'] = require('./views/molecules/RoomDropTarget');
skin['molecules.RoomTooltip'] = require('./views/molecules/RoomTooltip');
skin['molecules.SearchBar'] = require('./views/molecules/SearchBar');
skin['molecules.SenderProfile'] = require('./views/molecules/SenderProfile');
skin['organisms.CreateRoom'] = require('./views/organisms/CreateRoom');
skin['organisms.ErrorDialog'] = require('./views/organisms/ErrorDialog');
skin['organisms.LeftPanel'] = require('./views/organisms/LeftPanel');
skin['organisms.LogoutPrompt'] = require('./views/organisms/LogoutPrompt');
skin['organisms.MemberList'] = require('./views/organisms/MemberList');
skin['organisms.Notifier'] = require('./views/organisms/Notifier');
skin['organisms.QuestionDialog'] = require('./views/organisms/QuestionDialog');
skin['organisms.RightPanel'] = require('./views/organisms/RightPanel');
skin['organisms.RoomDirectory'] = require('./views/organisms/RoomDirectory');
skin['organisms.RoomList'] = require('./views/organisms/RoomList');
skin['organisms.RoomSubList'] = require('./views/organisms/RoomSubList');
skin['organisms.RoomView'] = require('./views/organisms/RoomView');
skin['organisms.UserSettings'] = require('./views/organisms/UserSettings');
skin['organisms.ViewSource'] = require('./views/organisms/ViewSource');
skin['pages.CompatibilityPage'] = require('./views/pages/CompatibilityPage');
skin['pages.MatrixChat'] = require('./views/pages/MatrixChat');

module.exports = skin;