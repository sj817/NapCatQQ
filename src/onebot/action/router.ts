export type BaseCheckResult = ValidCheckResult | InvalidCheckResult;

export interface ValidCheckResult {
    valid: true;
}

export interface InvalidCheckResult {
    valid: false;
    message: string;
}

export const ActionName = {
    SetGroupKickMembers: 'set_group_kick_members',
    SetGroupRobotAddOption: 'set_group_robot_add_option',
    SetGroupAddOption: 'set_group_add_option',
    SetGroupSearch: 'set_group_search',
    // new extends 完全差异OneBot类别
    GetDoubtFriendsAddRequest: 'get_doubt_friends_add_request',
    SetDoubtFriendsAddRequest: 'set_doubt_friends_add_request',
    // napcat
    GetRkeyEx: 'get_rkey',
    GetRkeyServer: 'get_rkey_server',
    SetGroupRemark: 'set_group_remark',
    NapCat_GetPrivateFileUrl: 'get_private_file_url',
    ClickInlineKeyboardButton: 'click_inline_keyboard_button',
    GetUnidirectionalFriendList: 'get_unidirectional_friend_list',
    // onebot 11
    SendPrivateMsg: 'send_private_msg',
    SendGroupMsg: 'send_group_msg',
    SendMsg: 'send_msg',
    DeleteMsg: 'delete_msg',
    GetMsg: 'get_msg',
    GoCQHTTP_GetForwardMsg: 'get_forward_msg',
    SendLike: 'send_like',
    SetGroupKick: 'set_group_kick',
    SetGroupBan: 'set_group_ban',
    // SetGroupAnoymousBan : 'set_group_anonymous_ban',
    SetGroupWholeBan: 'set_group_whole_ban',
    SetGroupAdmin: 'set_group_admin',
    // SetGroupAnoymous : 'set_group_anonymous',
    SetGroupCard: 'set_group_card',
    SetGroupName: 'set_group_name',
    SetGroupLeave: 'set_group_leave',
    SetSpecialTitle: 'set_group_special_title',
    SetFriendAddRequest: 'set_friend_add_request',
    SetFriendRemark: 'set_friend_remark',
    SetGroupAddRequest: 'set_group_add_request',
    GetLoginInfo: 'get_login_info',
    GoCQHTTP_GetStrangerInfo: 'get_stranger_info',
    GetFriendList: 'get_friend_list',
    GetGroupInfo: 'get_group_info',
    GetGroupList: 'get_group_list',
    GetGroupMemberInfo: 'get_group_member_info',
    GetGroupMemberList: 'get_group_member_list',
    GetGroupHonorInfo: 'get_group_honor_info',
    GetCookies: 'get_cookies',
    GetCSRF: 'get_csrf_token',
    GetCredentials: 'get_credentials',
    GetRecord: 'get_record',
    GetImage: 'get_image',
    CanSendImage: 'can_send_image',
    CanSendRecord: 'can_send_record',
    GetStatus: 'get_status',
    GetVersionInfo: 'get_version_info',
    // Reboot : 'set_restart',
    CleanCache: 'clean_cache',
    Exit: 'bot_exit',
    // go-cqhttp
    SetQQProfile: 'set_qq_profile',
    // QidianGetAccountInfo : 'qidian_get_account_info',
    GoCQHTTP_GetModelShow: '_get_model_show',
    GoCQHTTP_SetModelShow: '_set_model_show',
    GetOnlineClient: 'get_online_clients',
    // GetUnidirectionalFriendList : 'get_unidirectional_friend_list',
    GoCQHTTP_DeleteFriend: 'delete_friend',
    // DeleteUnidirectionalFriendList : 'delete_unidirectional_friend',
    GoCQHTTP_MarkMsgAsRead: 'mark_msg_as_read',
    GoCQHTTP_SendGroupForwardMsg: 'send_group_forward_msg',
    GoCQHTTP_SendPrivateForwardMsg: 'send_private_forward_msg',
    GoCQHTTP_GetGroupMsgHistory: 'get_group_msg_history',
    OCRImage: 'ocr_image',
    IOCRImage: '.ocr_image',
    GetGroupSystemMsg: 'get_group_system_msg',
    GoCQHTTP_GetEssenceMsg: 'get_essence_msg_list',
    GoCQHTTP_GetGroupAtAllRemain: 'get_group_at_all_remain',
    SetGroupPortrait: 'set_group_portrait',
    SetEssenceMsg: 'set_essence_msg',
    DelEssenceMsg: 'delete_essence_msg',
    GoCQHTTP_SendGroupNotice: '_send_group_notice',
    GoCQHTTP_GetGroupNotice: '_get_group_notice',
    GoCQHTTP_UploadGroupFile: 'upload_group_file',
    GOCQHTTP_DeleteGroupFile: 'delete_group_file',
    GoCQHTTP_CreateGroupFileFolder: 'create_group_file_folder',
    GoCQHTTP_DeleteGroupFileFolder: 'delete_group_folder',
    GoCQHTTP_GetGroupFileSystemInfo: 'get_group_file_system_info',
    GoCQHTTP_GetGroupRootFiles: 'get_group_root_files',
    GoCQHTTP_GetGroupFilesByFolder: 'get_group_files_by_folder',
    GOCQHTTP_GetGroupFileUrl: 'get_group_file_url',
    GOCQHTTP_UploadPrivateFile: 'upload_private_file',
    // GOCQHTTP_ReloadEventFilter : 'reload_event_filter',
    GoCQHTTP_DownloadFile: 'download_file',
    GoCQHTTP_CheckUrlSafely: 'check_url_safely',
    GoCQHTTP_GetWordSlices: '.get_word_slices',
    GoCQHTTP_HandleQuickAction: '.handle_quick_operation',

    // 以下为扩展napcat扩展
    Unknown: 'unknown',
    SetDiyOnlineStatus: 'set_diy_online_status',
    SharePeer: 'ArkSharePeer',
    ShareGroupEx: 'ArkShareGroup',
    // RebootNormal : 'reboot_normal', //无快速登录重新启动
    GetRobotUinRange: 'get_robot_uin_range',
    SetOnlineStatus: 'set_online_status',
    GetFriendsWithCategory: 'get_friends_with_category',
    SetQQAvatar: 'set_qq_avatar',
    GetFile: 'get_file',
    ForwardFriendSingleMsg: 'forward_friend_single_msg',
    ForwardGroupSingleMsg: 'forward_group_single_msg',
    TranslateEnWordToZn: 'translate_en2zh',
    SetMsgEmojiLike: 'set_msg_emoji_like',
    GoCQHTTP_SendForwardMsg: 'send_forward_msg',
    MarkPrivateMsgAsRead: 'mark_private_msg_as_read',
    MarkGroupMsgAsRead: 'mark_group_msg_as_read',
    GetFriendMsgHistory: 'get_friend_msg_history',
    CreateCollection: 'create_collection',
    GetCollectionList: 'get_collection_list',
    SetLongNick: 'set_self_longnick',
    GetRecentContact: 'get_recent_contact',
    _MarkAllMsgAsRead: '_mark_all_as_read',
    GetProfileLike: 'get_profile_like',
    FetchCustomFace: 'fetch_custom_face',
    FetchEmojiLike: 'fetch_emoji_like',
    SetInputStatus: 'set_input_status',
    GetGroupInfoEx: 'get_group_info_ex',
    GetGroupDetailInfo: 'get_group_detail_info',
    GetGroupIgnoreAddRequest: 'get_group_ignore_add_request',
    DelGroupNotice: '_del_group_notice',
    FriendPoke: 'friend_poke',
    GroupPoke: 'group_poke',
    GetPacketStatus: 'nc_get_packet_status',
    GetUserStatus: 'nc_get_user_status',
    GetRkey: 'nc_get_rkey',
    GetGroupShutList: 'get_group_shut_list',

    MoveGroupFile: 'move_group_file',
    TransGroupFile: 'trans_group_file',
    RenameGroupFile: 'rename_group_file',

    GetGuildList: 'get_guild_list',
    GetGuildProfile: 'get_guild_service_profile',

    GetGroupIgnoredNotifies: 'get_group_ignored_notifies',

    SetGroupSign: 'set_group_sign',
    SendGroupSign: 'send_group_sign',
    SendPacket: 'send_packet',
    GetMiniAppArk: 'get_mini_app_ark',
    // UploadForwardMsg : "upload_forward_msg",
    GetAiRecord: 'get_ai_record',
    GetAiCharacters: 'get_ai_characters',
    SendGroupAiRecord: 'send_group_ai_record',

    GetClientkey: 'get_clientkey',

    SendPoke: 'send_poke',
} as const;
