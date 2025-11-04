/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface WorkTimeSettings {
  id?: string;
  /** @format int32 */
  minutesADay?: number;
  workDays?: number[];
  /** @format int32 */
  firstDayOfWeek?: number;
  /** @format int32 */
  daysAWeek?: number;
  $type?: string;
}

export interface WorkItemType {
  id?: string;
  name?: string;
  autoAttached?: boolean;
  $type?: string;
}

/** Represents the project-related settings of a work item attribute. */
export interface WorkItemProjectAttribute {
  id?: string;
  timeTrackingSettings?: ProjectTimeTrackingSettings;
  /** Represents a work item attribute prototype that is common for all projects. The project-related settings for work item attributes are stored in the `WorkItemProjectAttribute` entities. */
  prototype?: WorkItemAttributePrototype;
  values?: WorkItemAttributeValue[];
  name?: string;
  /** @format int32 */
  ordinal?: number;
  $type?: string;
}

/** Represents a value of a work item attribute. */
export interface WorkItemAttributeValue {
  id?: string;
  name?: string;
  description?: string;
  autoAttach?: boolean;
  /** Represents a work item attribute prototype that is common for all projects. The project-related settings for work item attributes are stored in the `WorkItemProjectAttribute` entities. */
  prototype?: WorkItemAttributePrototype;
  $type?: string;
}

/** Represents a work item attribute prototype that is common for all projects. The project-related settings for work item attributes are stored in the `WorkItemProjectAttribute` entities. */
export interface WorkItemAttributePrototype {
  id?: string;
  name?: string;
  instances?: WorkItemProjectAttribute[];
  values?: WorkItemAttributeValue[];
  $type?: string;
}

/** Represents the attribute of a specific work item. */
export interface WorkItemAttribute {
  id?: string;
  /** Represents a basic ancestor for work items. */
  workItem?: BaseWorkItem;
  /** Represents the project-related settings of a work item attribute. */
  projectAttribute?: WorkItemProjectAttribute;
  /** Represents a value of a work item attribute. */
  value?: WorkItemAttributeValue;
  name?: string;
  $type?: string;
}

/** Stores users and groups that have access to a tag or a saved search. */
export interface WatchFolderSharingSettings {
  id?: string;
  permittedGroups?: UserGroup[];
  permittedUsers?: User[];
  $type?: string;
}

/** Represents WIP limits for particular column. If they are not satisfied, the column will be highlighted in UI. */
export interface WIPLimit {
  id?: string;
  /** @format int32 */
  max?: number;
  /** @format int32 */
  min?: number;
  /** Represents settings for a single board column */
  column?: AgileColumn;
  $type?: string;
}

/** Represents visibility settings of an entity, for example, an issue or a comment. */
export type Visibility = BaseVisibility &
  (
    | BaseVisibilityTypeMapping<"Visibility", Visibility>
    | BaseVisibilityTypeMapping<"UnlimitedVisibility", UnlimitedVisibility>
    | BaseVisibilityTypeMapping<"LimitedVisibility", LimitedVisibility>
  );

/** The basic entity that represents a VCS or a build server. */
export type VcsServer = BaseVcsServer &
  (
    | BaseVcsServerTypeMapping<"VcsServer", VcsServer>
    | BaseVcsServerTypeMapping<"JenkinsServer", JenkinsServer>
    | BaseVcsServerTypeMapping<"VcsHostingServer", VcsHostingServer>
    | BaseVcsServerTypeMapping<"GogsServer", GogsServer>
    | BaseVcsServerTypeMapping<"GiteaServer", GiteaServer>
    | BaseVcsServerTypeMapping<"SpaceServer", SpaceServer>
    | BaseVcsServerTypeMapping<"GitHubServer", GitHubServer>
    | BaseVcsServerTypeMapping<"GitLabServer", GitLabServer>
    | BaseVcsServerTypeMapping<"BitBucketServer", BitBucketServer>
    | BaseVcsServerTypeMapping<
        "BitbucketStandaloneServer",
        BitbucketStandaloneServer
      >
    | BaseVcsServerTypeMapping<"TeamcityServer", TeamcityServer>
  );

export interface VcsChange {
  id?: string;
  /** @format int64 */
  date?: number;
  /** @format int64 */
  fetched?: number;
  /** @format int32 */
  files?: number;
  author?: User;
  processors?: ChangesProcessor[];
  text?: string;
  urls?: string[];
  version?: string;
  issue?: Issue;
  /** @format int32 */
  state?: number;
  $type?: string;
}

/** Represents a group of settings of a user profile in YouTrack. */
export interface UserProfiles {
  id?: string;
  general?: GeneralUserProfile;
  notifications?: NotificationsUserProfile;
  timetracking?: TimeTrackingUserProfile;
  $type?: string;
}

export type UserGroup = BaseUserGroup &
  (
    | BaseUserGroupTypeMapping<"UserGroup", UserGroup>
    | BaseUserGroupTypeMapping<"AllUsersGroup", AllUsersGroup>
    | BaseUserGroupTypeMapping<"RegisteredUsersGroup", RegisteredUsersGroup>
    | BaseUserGroupTypeMapping<"NestedGroup", NestedGroup>
    | BaseUserGroupTypeMapping<"ProjectTeam", ProjectTeam>
  );

export type User = BaseUser &
  (
    | BaseUserTypeMapping<"User", User>
    | BaseUserTypeMapping<"VcsUnresolvedUser", VcsUnresolvedUser>
    | BaseUserTypeMapping<"Me", Me>
  );

/** Represents a time zone. */
export interface TimeZoneDescriptor {
  id?: string;
  presentation?: string;
  /** @format int32 */
  offset?: number;
  $type?: string;
}

export interface TimeTrackingUserProfile {
  id?: string;
  /** Represents the format, in which the period values are displayed to the user. */
  periodFormat?: PeriodFieldFormat;
  $type?: string;
}

/** Represents a value of the text field. Returns both source and rendered text. */
export interface TextFieldValue {
  id?: string;
  text?: string;
  markdownText?: string;
  $type?: string;
}

export interface Telemetry {
  id?: string;
  installationFolder?: string;
  databaseLocation?: string;
  logsLocation?: string;
  /** @format int32 */
  availableProcessors?: number;
  availableMemory?: string;
  allocatedMemory?: string;
  usedMemory?: string;
  uptime?: string;
  /** @format int64 */
  startedTime?: number;
  /** @format int32 */
  databaseBackgroundThreads?: number;
  /** @format int32 */
  pendingAsyncJobs?: number;
  /** @format int32 */
  cachedResultsCountInDBQueriesCache?: number;
  databaseQueriesCacheHitRate?: string;
  blobStringsCacheHitRate?: string;
  /** @format int64 */
  totalTransactions?: number;
  transactionsPerSecond?: string;
  requestsPerSecond?: string;
  databaseSize?: string;
  fullDatabaseSize?: string;
  textIndexSize?: string;
  /** Stores number of online user. */
  onlineUsers?: OnlineUsers;
  /** @format int32 */
  reportCalculatorThreads?: number;
  /** @format int32 */
  notificationAnalyzerThreads?: number;
  $type?: string;
}

/** Stores users and groups that have access to a tag. */
export interface TagSharingSettings {
  id?: string;
  permittedGroups?: UserGroup[];
  permittedUsers?: User[];
  $type?: string;
}

export interface SystemSettings {
  id?: string;
  baseUrl?: string;
  /** @format int64 */
  maxUploadFileSize?: number;
  /** @format int32 */
  maxExportItems?: number;
  administratorEmail?: string;
  allowStatisticsCollection?: boolean;
  isApplicationReadOnly?: boolean;
  $type?: string;
}

/** Represents single swimlane in case of IssueBasedSwimlaneSettings. */
export interface SwimlaneValue {
  id?: string;
  name?: string;
  $type?: string;
}

/** Base entity for different swimlane settings */
export type SwimlaneSettings = BaseSwimlaneSettings &
  (
    | BaseSwimlaneSettingsTypeMapping<"SwimlaneSettings", SwimlaneSettings>
    | BaseSwimlaneSettingsTypeMapping<
        "AttributeBasedSwimlaneSettings",
        AttributeBasedSwimlaneSettings
      >
    | BaseSwimlaneSettingsTypeMapping<
        "IssueBasedSwimlaneSettings",
        IssueBasedSwimlaneSettings
      >
  );

/** Represents query suggestion. */
export interface Suggestion {
  id?: string;
  /** @format int32 */
  completionStart?: number;
  /** @format int32 */
  completionEnd?: number;
  /** @format int32 */
  matchingStart?: number;
  /** @format int32 */
  matchingEnd?: number;
  /** @format int32 */
  caret?: number;
  description?: string;
  option?: string;
  prefix?: string;
  suffix?: string;
  group?: string;
  icon?: string;
  auxiliaryIcon?: string;
  className?: string;
  $type?: string;
}

/** SSL key representation. */
export interface StorageEntry {
  id?: string;
  name?: string;
  $type?: string;
}

/** Describes sprints configuration. */
export interface SprintsSettings {
  id?: string;
  isExplicit?: boolean;
  cardOnSeveralSprints?: boolean;
  defaultSprint?: Sprint;
  disableSprints?: boolean;
  explicitQuery?: string;
  sprintSyncField?: CustomField;
  hideSubtasksOfCards?: boolean;
  $type?: string;
}

export interface Sprint {
  id?: string;
  agile?: Agile;
  name?: string;
  goal?: string;
  /** @format int64 */
  start?: number;
  /** @format int64 */
  finish?: number;
  archived?: boolean;
  isDefault?: boolean;
  issues?: Issue[];
  /** @format int32 */
  unresolvedIssuesCount?: number;
  previousSprint?: Sprint;
  $type?: string;
}

export interface SearchSuggestions {
  id?: string;
  /** @format int32 */
  caret?: number;
  ignoreUnresolvedSetting?: boolean;
  query?: string;
  suggestions?: Suggestion[];
  folders?: IssueFolder[];
  $type?: string;
}

export interface RestCorsSettings {
  id?: string;
  allowedOrigins?: string[];
  allowAllOrigins?: boolean;
  $type?: string;
}

export interface Reaction {
  id?: string;
  author?: User;
  reaction?: string;
  $type?: string;
}

export interface ProjectTimeTrackingSettings {
  id?: string;
  enabled?: boolean;
  estimate?: ProjectCustomField;
  timeSpent?: ProjectCustomField;
  workItemTypes?: WorkItemType[];
  project?: Project;
  attributes?: WorkItemProjectAttribute[];
  $type?: string;
}

export type ProjectCustomField = BaseProjectCustomField &
  (
    | BaseProjectCustomFieldTypeMapping<
        "ProjectCustomField",
        ProjectCustomField
      >
    | BaseProjectCustomFieldTypeMapping<
        "GroupProjectCustomField",
        GroupProjectCustomField
      >
    | BaseProjectCustomFieldTypeMapping<
        "BundleProjectCustomField",
        BundleProjectCustomField
      >
    | BaseProjectCustomFieldTypeMapping<
        "UserProjectCustomField",
        UserProjectCustomField
      >
    | BaseProjectCustomFieldTypeMapping<
        "BuildProjectCustomField",
        BuildProjectCustomField
      >
    | BaseProjectCustomFieldTypeMapping<
        "StateProjectCustomField",
        StateProjectCustomField
      >
    | BaseProjectCustomFieldTypeMapping<
        "VersionProjectCustomField",
        VersionProjectCustomField
      >
    | BaseProjectCustomFieldTypeMapping<
        "OwnedProjectCustomField",
        OwnedProjectCustomField
      >
    | BaseProjectCustomFieldTypeMapping<
        "EnumProjectCustomField",
        EnumProjectCustomField
      >
    | BaseProjectCustomFieldTypeMapping<
        "SimpleProjectCustomField",
        SimpleProjectCustomField
      >
    | BaseProjectCustomFieldTypeMapping<
        "PeriodProjectCustomField",
        PeriodProjectCustomField
      >
    | BaseProjectCustomFieldTypeMapping<
        "TextProjectCustomField",
        TextProjectCustomField
      >
  );

/** Represents color setting for one project on the board. */
export interface ProjectColor {
  id?: string;
  project?: Project;
  /** Represents the style settings of the field in YouTrack. */
  color?: FieldStyle;
  $type?: string;
}

/** Represents the period field value. */
export interface PeriodValue {
  id?: string;
  /** @format int32 */
  minutes?: number;
  presentation?: string;
  $type?: string;
}

/** Represents the format, in which the period values are displayed to the user. */
export interface PeriodFieldFormat {
  id?: string;
  $type?: string;
}

/** Represents the command that was parsed from the provided query. */
export interface ParsedCommand {
  id?: string;
  description?: string;
  error?: boolean;
  delete?: boolean;
  $type?: string;
}

/** Stores number of online user. */
export interface OnlineUsers {
  id?: string;
  /** @format int32 */
  users?: number;
  $type?: string;
}

export interface NotificationsUserProfile {
  id?: string;
  notifyOnOwnChanges?: boolean;
  emailNotificationsEnabled?: boolean;
  mentionNotificationsEnabled?: boolean;
  duplicateClusterNotificationsEnabled?: boolean;
  mailboxIntegrationNotificationsEnabled?: boolean;
  usePlainTextEmails?: boolean;
  autoWatchOnComment?: boolean;
  autoWatchOnCreate?: boolean;
  autoWatchOnVote?: boolean;
  autoWatchOnUpdate?: boolean;
  $type?: string;
}

export interface NotificationSettings {
  id?: string;
  /** Represents email settings for this YouTrack installation. */
  emailSettings?: EmailSettings;
  $type?: string;
}

/** Company logo that is used in YouTrack. */
export interface Logo {
  id?: string;
  url?: string;
  $type?: string;
}

export interface LocaleSettings {
  id?: string;
  /** Represents a language locale that is used in UI. */
  locale?: LocaleDescriptor;
  isRTL?: boolean;
  $type?: string;
}

/** Represents a language locale that is used in UI. */
export interface LocaleDescriptor {
  id?: string;
  locale?: string;
  language?: string;
  community?: boolean;
  name?: string;
  $type?: string;
}

export interface License {
  id?: string;
  username?: string;
  license?: string;
  error?: string;
  $type?: string;
}

/** Represents users that are subscribed to notifications about the issue. */
export interface IssueWatchers {
  id?: string;
  hasStar?: boolean;
  issueWatchers?: IssueWatcher[];
  duplicateWatchers?: IssueWatcher[];
  $type?: string;
}

/** Represents a user who subscribed for notifications about an issue. */
export interface IssueWatcher {
  id?: string;
  user?: User;
  issue?: Issue;
  isStarred?: boolean;
  $type?: string;
}

/** Represents users that have voted for the issue or its duplicates. */
export interface IssueVoters {
  id?: string;
  hasVote?: boolean;
  original?: User[];
  duplicate?: DuplicateVote[];
  $type?: string;
}

export interface IssueTimeTracker {
  id?: string;
  workItems?: IssueWorkItem[];
  enabled?: boolean;
  $type?: string;
}

export interface IssueLinkType {
  id?: string;
  name?: string;
  localizedName?: string;
  sourceToTarget?: string;
  localizedSourceToTarget?: string;
  targetToSource?: string;
  localizedTargetToSource?: string;
  directed?: boolean;
  aggregation?: boolean;
  readOnly?: boolean;
  $type?: string;
}

export interface IssueLink {
  id?: string;
  direction?: "OUTWARD" | "INWARD" | "BOTH";
  linkType?: IssueLinkType;
  issues?: Issue[];
  trimmedIssues?: Issue[];
  $type?: string;
}

/** Stores information about a project where the issue belongs or previously belonged. This entity appears as part of the ProjectActivityItem object. */
export interface IssueKey {
  id?: string;
  project?: Project;
  /** @format int64 */
  numberInProject?: number;
  $type?: string;
}

/** Represents an issue folder, such as a project, a saved search, or a tag. */
export type IssueFolder = BaseIssueFolder &
  (
    | BaseIssueFolderTypeMapping<"IssueFolder", IssueFolder>
    | BaseIssueFolderTypeMapping<"WatchFolder", WatchFolder>
    | BaseIssueFolderTypeMapping<"IssueTag", IssueTag>
    | BaseIssueFolderTypeMapping<"Tag", Tag>
    | BaseIssueFolderTypeMapping<"SavedQuery", SavedQuery>
    | BaseIssueFolderTypeMapping<"Project", Project>
  );

export type IssueCustomField = BaseIssueCustomField &
  (
    | BaseIssueCustomFieldTypeMapping<"IssueCustomField", IssueCustomField>
    | BaseIssueCustomFieldTypeMapping<
        "PeriodIssueCustomField",
        PeriodIssueCustomField
      >
    | BaseIssueCustomFieldTypeMapping<
        "SimpleIssueCustomField",
        SimpleIssueCustomField
      >
    | BaseIssueCustomFieldTypeMapping<
        "DateIssueCustomField",
        DateIssueCustomField
      >
    | BaseIssueCustomFieldTypeMapping<
        "SingleValueIssueCustomField",
        DatabaseSingleValueIssueCustomField
      >
    | BaseIssueCustomFieldTypeMapping<
        "StateIssueCustomField",
        StateIssueCustomField
      >
    | BaseIssueCustomFieldTypeMapping<
        "SingleBuildIssueCustomField",
        SingleBuildIssueCustomField
      >
    | BaseIssueCustomFieldTypeMapping<
        "SingleUserIssueCustomField",
        SingleUserIssueCustomField
      >
    | BaseIssueCustomFieldTypeMapping<
        "SingleGroupIssueCustomField",
        SingleGroupIssueCustomField
      >
    | BaseIssueCustomFieldTypeMapping<
        "SingleVersionIssueCustomField",
        SingleVersionIssueCustomField
      >
    | BaseIssueCustomFieldTypeMapping<
        "SingleOwnedIssueCustomField",
        SingleOwnedIssueCustomField
      >
    | BaseIssueCustomFieldTypeMapping<
        "SingleEnumIssueCustomField",
        SingleEnumIssueCustomField
      >
    | BaseIssueCustomFieldTypeMapping<
        "MultiValueIssueCustomField",
        DatabaseMultiValueIssueCustomField
      >
    | BaseIssueCustomFieldTypeMapping<
        "MultiBuildIssueCustomField",
        MultiBuildIssueCustomField
      >
    | BaseIssueCustomFieldTypeMapping<
        "MultiGroupIssueCustomField",
        MultiGroupIssueCustomField
      >
    | BaseIssueCustomFieldTypeMapping<
        "MultiVersionIssueCustomField",
        MultiVersionIssueCustomField
      >
    | BaseIssueCustomFieldTypeMapping<
        "MultiOwnedIssueCustomField",
        MultiOwnedIssueCustomField
      >
    | BaseIssueCustomFieldTypeMapping<
        "MultiEnumIssueCustomField",
        MultiEnumIssueCustomField
      >
    | BaseIssueCustomFieldTypeMapping<
        "MultiUserIssueCustomField",
        MultiUserIssueCustomField
      >
    | BaseIssueCustomFieldTypeMapping<
        "StateMachineIssueCustomField",
        StateMachineIssueCustomField
      >
    | BaseIssueCustomFieldTypeMapping<
        "TextIssueCustomField",
        TextIssueCustomField
      >
  );

export interface IssueCountResponse {
  id?: string;
  /** @format int64 */
  count?: number;
  unresolvedOnly?: boolean;
  query?: string;
  /** Represents an issue folder, such as a project, a saved search, or a tag. */
  folder?: IssueFolder;
  $type?: string;
}

export interface IssueComment {
  id?: string;
  attachments?: IssueAttachment[];
  author?: User;
  /** @format int64 */
  created?: number;
  deleted?: boolean;
  issue?: Issue;
  pinned?: boolean;
  reactions?: Reaction[];
  text?: string;
  textPreview?: string;
  /** @format int64 */
  updated?: number;
  /** Represents visibility settings of an entity, for example, an issue or a comment. */
  visibility?: Visibility;
  $type?: string;
}

export interface IssueAttachment {
  id?: string;
  name?: string;
  author?: User;
  /** @format int64 */
  created?: number;
  /** @format int64 */
  updated?: number;
  /** @format int64 */
  size?: number;
  extension?: string;
  charset?: string;
  mimeType?: string;
  metaData?: string;
  draft?: boolean;
  removed?: boolean;
  base64Content?: string;
  url?: string;
  /** Represents visibility settings of an entity, for example, an issue or a comment. */
  visibility?: Visibility;
  issue?: Issue;
  comment?: IssueComment;
  thumbnailURL?: string;
  $type?: string;
}

export interface Issue {
  id?: string;
  attachments?: IssueAttachment[];
  comments?: IssueComment[];
  /** @format int32 */
  commentsCount?: number;
  /** @format int64 */
  created?: number;
  customFields?: IssueCustomField[];
  description?: string;
  draftOwner?: User;
  /** For an issue that was imported from another service, represents the reference to the issue in the external system. */
  externalIssue?: ExternalIssue;
  idReadable?: string;
  isDraft?: boolean;
  links?: IssueLink[];
  /** @format int64 */
  numberInProject?: number;
  parent?: IssueLink;
  pinnedComments?: IssueComment[];
  project?: Project;
  reporter?: User;
  /** @format int64 */
  resolved?: number;
  subtasks?: IssueLink;
  summary?: string;
  tags?: Tag[];
  /** @format int64 */
  updated?: number;
  updater?: User;
  /** Represents visibility settings of an entity, for example, an issue or a comment. */
  visibility?: Visibility;
  /** Represents users that have voted for the issue or its duplicates. */
  voters?: IssueVoters;
  /** @format int32 */
  votes?: number;
  /** Represents users that are subscribed to notifications about the issue. */
  watchers?: IssueWatchers;
  wikifiedDescription?: string;
  $type?: string;
}

export interface GlobalTimeTrackingSettings {
  id?: string;
  workItemTypes?: WorkItemType[];
  workTimeSettings?: WorkTimeSettings;
  attributePrototypes?: WorkItemAttributePrototype[];
  $type?: string;
}

export interface GlobalSettings {
  id?: string;
  systemSettings?: SystemSettings;
  notificationSettings?: NotificationSettings;
  restSettings?: RestCorsSettings;
  appearanceSettings?: AppearanceSettings;
  localeSettings?: LocaleSettings;
  license?: License;
  $type?: string;
}

export interface GeneralUserProfile {
  id?: string;
  /** Represents date format. */
  dateFieldFormat?: DateFormatDescriptor;
  /** Represents a time zone. */
  timezone?: TimeZoneDescriptor;
  /** Represents a language locale that is used in UI. */
  locale?: LocaleDescriptor;
  $type?: string;
}

/** Represents an issue property, which can be a predefined field, a custom field, a link, and so on. */
export type FilterField = BaseFilterField &
  (
    | BaseFilterFieldTypeMapping<"FilterField", FilterField>
    | BaseFilterFieldTypeMapping<"PredefinedFilterField", PredefinedFilterField>
    | BaseFilterFieldTypeMapping<"CustomFilterField", CustomFilterField>
  );

export interface FieldType {
  id?: string;
  $type?: string;
}

/** Represents the style settings of the field in YouTrack. */
export interface FieldStyle {
  id?: string;
  background?: string;
  foreground?: string;
  $type?: string;
}

/** For an issue that was imported from another service, represents the reference to the issue in the external system. */
export interface ExternalIssue {
  id?: string;
  name?: string;
  url?: string;
  key?: string;
  $type?: string;
}

/** For an article that was imported from another service, this entity represents the reference to the article in the external system. */
export interface ExternalArticle {
  id?: string;
  name?: string;
  url?: string;
  key?: string;
  $type?: string;
}

/** Represents a transition from one value to another for a custom field that is managed by a state-machine rule in workflow. */
export interface Event {
  id?: string;
  presentation?: string;
  $type?: string;
}

/** Represents email settings for this YouTrack installation. */
export interface EmailSettings {
  id?: string;
  isEnabled?: boolean;
  host?: string;
  /** @format int32 */
  port?: number;
  mailProtocol?: "SMTP" | "SMTPS" | "SMTP_TLS" | "MS_GRAPH_API";
  anonymous?: boolean;
  login?: string;
  /** SSL key representation. */
  sslKey?: StorageEntry;
  from?: string;
  replyTo?: string;
  $type?: string;
}

/** Represents the duration value and its visual presentation. */
export interface DurationValue {
  id?: string;
  /** @format int32 */
  minutes?: number;
  presentation?: string;
  $type?: string;
}

/** Represents a vote for duplicates of the issue. */
export interface DuplicateVote {
  id?: string;
  issue?: Issue;
  user?: User;
  $type?: string;
}

/** Represents date format. */
export interface DateFormatDescriptor {
  id?: string;
  presentation?: string;
  pattern?: string;
  datePattern?: string;
  $type?: string;
}

export interface DatabaseBackupSettings {
  id?: string;
  location?: string;
  /** @format int32 */
  filesToKeep?: number;
  cronExpression?: string;
  archiveFormat?: "TAR_GZ" | "ZIP";
  isOn?: boolean;
  /** @format int64 */
  availableDiskSpace?: number;
  notifiedUsers?: User[];
  backupStatus?: BackupStatus;
  $type?: string;
}

/** Represents string reference to the value. */
export type DatabaseAttributeValue = BaseDatabaseAttributeValue &
  (
    | BaseDatabaseAttributeValueTypeMapping<
        "DatabaseAttributeValue",
        DatabaseAttributeValue
      >
    | BaseDatabaseAttributeValueTypeMapping<
        "SwimlaneEntityAttributeValue",
        SwimlaneEntityAttributeValue
      >
    | BaseDatabaseAttributeValueTypeMapping<
        "AgileColumnFieldValue",
        AgileColumnFieldValue
      >
  );

export type CustomFieldDefaults = BaseCustomFieldDefaults &
  (
    | BaseCustomFieldDefaultsTypeMapping<
        "CustomFieldDefaults",
        CustomFieldDefaults
      >
    | BaseCustomFieldDefaultsTypeMapping<
        "BundleCustomFieldDefaults",
        BundleCustomFieldDefaults
      >
    | BaseCustomFieldDefaultsTypeMapping<
        "UserCustomFieldDefaults",
        UserCustomFieldDefaults
      >
    | BaseCustomFieldDefaultsTypeMapping<
        "BuildBundleCustomFieldDefaults",
        BuildBundleCustomFieldDefaults
      >
    | BaseCustomFieldDefaultsTypeMapping<
        "StateBundleCustomFieldDefaults",
        StateBundleCustomFieldDefaults
      >
    | BaseCustomFieldDefaultsTypeMapping<
        "VersionBundleCustomFieldDefaults",
        VersionBundleCustomFieldDefaults
      >
    | BaseCustomFieldDefaultsTypeMapping<
        "EnumBundleCustomFieldDefaults",
        EnumBundleCustomFieldDefaults
      >
    | BaseCustomFieldDefaultsTypeMapping<
        "OwnedBundleCustomFieldDefaults",
        OwnedBundleCustomFieldDefaults
      >
  );

/** Represents the condition for showing a custom field. */
export type CustomFieldCondition = BaseCustomFieldCondition &
  (
    | BaseCustomFieldConditionTypeMapping<
        "CustomFieldCondition",
        CustomFieldCondition
      >
    | BaseCustomFieldConditionTypeMapping<
        "FieldBasedCondition",
        FieldBasedCondition
      >
  );

export interface CustomField {
  id?: string;
  name?: string;
  localizedName?: string;
  fieldType?: FieldType;
  isAutoAttached?: boolean;
  isDisplayedInIssueList?: boolean;
  /** @format int32 */
  ordinal?: number;
  aliases?: string;
  fieldDefaults?: CustomFieldDefaults;
  hasRunningJob?: boolean;
  isUpdateable?: boolean;
  instances?: ProjectCustomField[];
  $type?: string;
}

/** Visibility settings of the comment that is added along with the command. */
export type CommandVisibility = BaseCommandVisibility &
  (
    | BaseCommandVisibilityTypeMapping<"CommandVisibility", CommandVisibility>
    | BaseCommandVisibilityTypeMapping<
        "CommandUnlimitedVisibility",
        CommandUnlimitedVisibility
      >
    | BaseCommandVisibilityTypeMapping<
        "CommandLimitedVisibility",
        CommandLimitedVisibility
      >
  );

export interface CommandList {
  id?: string;
  comment?: string;
  /** Visibility settings of the comment that is added along with the command. */
  visibility?: CommandVisibility;
  query?: string;
  /** @format int32 */
  caret?: number;
  silent?: boolean;
  runAs?: string;
  commands?: ParsedCommand[];
  issues?: Issue[];
  suggestions?: Suggestion[];
  $type?: string;
}

/** Agile board columns settings. */
export interface ColumnSettings {
  id?: string;
  field?: CustomField;
  columns?: AgileColumn[];
  $type?: string;
}

/** Describes rules that define which colors are used for cards on the agile board. */
export type ColorCoding = BaseColorCoding &
  (
    | BaseColorCodingTypeMapping<"ColorCoding", ColorCoding>
    | BaseColorCodingTypeMapping<"FieldBasedColorCoding", FieldBasedColorCoding>
    | BaseColorCodingTypeMapping<
        "ProjectBasedColorCoding",
        ProjectBasedColorCoding
      >
  );

/** The basic entity that represents a VCS or a build server integration configured for a project. */
export type ChangesProcessor = BaseChangesProcessor &
  (
    | BaseChangesProcessorTypeMapping<"ChangesProcessor", ChangesProcessor>
    | BaseChangesProcessorTypeMapping<
        "VcsHostingChangesProcessor",
        VcsHostingChangesProcessor
      >
    | BaseChangesProcessorTypeMapping<
        "GitHubChangesProcessor",
        GitHubChangesProcessor
      >
    | BaseChangesProcessorTypeMapping<
        "GogsChangesProcessor",
        GogsChangesProcessor
      >
    | BaseChangesProcessorTypeMapping<
        "GiteaChangesProcessor",
        GiteaChangesProcessor
      >
    | BaseChangesProcessorTypeMapping<
        "SpaceChangesProcessor",
        SpaceChangesProcessor
      >
    | BaseChangesProcessorTypeMapping<
        "GitLabChangesProcessor",
        GitLabChangesProcessor
      >
    | BaseChangesProcessorTypeMapping<
        "BitBucketChangesProcessor",
        BitBucketChangesProcessor
      >
    | BaseChangesProcessorTypeMapping<
        "BitbucketStandaloneChangesProcessor",
        BitbucketStandaloneChangesProcessor
      >
    | BaseChangesProcessorTypeMapping<
        "TeamcityChangesProcessor",
        TeamcityChangesProcessor
      >
    | BaseChangesProcessorTypeMapping<
        "JenkinsChangesProcessor",
        JenkinsChangesProcessor
      >
  );

/** Represents a field value in YouTrack. */
export type BundleElement = BaseBundleElement &
  (
    | BaseBundleElementTypeMapping<"BundleElement", BundleElement>
    | BaseBundleElementTypeMapping<
        "LocalizableBundleElement",
        LocalizableBundleElement
      >
    | BaseBundleElementTypeMapping<"StateBundleElement", StateBundleElement>
    | BaseBundleElementTypeMapping<"EnumBundleElement", EnumBundleElement>
    | BaseBundleElementTypeMapping<"OwnedBundleElement", OwnedBundleElement>
    | BaseBundleElementTypeMapping<"VersionBundleElement", VersionBundleElement>
    | BaseBundleElementTypeMapping<"BuildBundleElement", BuildBundleElement>
  );

export type Bundle = BaseBundle &
  (
    | BaseBundleTypeMapping<"Bundle", Bundle>
    | BaseBundleTypeMapping<"BaseBundle", BaseBundle>
    | BaseBundleTypeMapping<"StateBundle", StateBundle>
    | BaseBundleTypeMapping<"EnumBundle", EnumBundle>
    | BaseBundleTypeMapping<"UserBundle", UserBundle>
    | BaseBundleTypeMapping<"OwnedBundle", OwnedBundle>
    | BaseBundleTypeMapping<"VersionBundle", VersionBundle>
    | BaseBundleTypeMapping<"BuildBundle", BuildBundle>
  );

/** Represents a basic ancestor for work items. */
export type BaseWorkItem = BaseBaseWorkItem &
  (
    | BaseBaseWorkItemTypeMapping<"BaseWorkItem", BaseWorkItem>
    | BaseBaseWorkItemTypeMapping<"IssueWorkItem", IssueWorkItem>
  );

/** Represents a base article entity. */
export type BaseArticle = BaseBaseArticle &
  (
    | BaseBaseArticleTypeMapping<"BaseArticle", BaseArticle>
    | BaseBaseArticleTypeMapping<"Article", Article>
  );

export interface BackupStatus {
  id?: string;
  backupInProgress?: boolean;
  backupCancelled?: boolean;
  /** Represents an error that appeared during the backup. */
  backupError?: BackupError;
  $type?: string;
}

export interface BackupFile {
  id?: string;
  name?: string;
  /** @format int64 */
  size?: number;
  /** @format int64 */
  creationDate?: number;
  link?: string;
  $type?: string;
}

/** Represents an error that appeared during the backup. */
export interface BackupError {
  id?: string;
  /** @format int64 */
  date?: number;
  errorMessage?: string;
  $type?: string;
}

export interface ArticleComment {
  id?: string;
  article?: Article;
  attachments?: ArticleAttachment[];
  author?: User;
  /** @format int64 */
  created?: number;
  pinned?: boolean;
  reactions?: Reaction[];
  text?: string;
  /** @format int64 */
  updated?: number;
  /** Represents visibility settings of an entity, for example, an issue or a comment. */
  visibility?: Visibility;
  $type?: string;
}

export interface ArticleAttachment {
  id?: string;
  name?: string;
  author?: User;
  /** @format int64 */
  created?: number;
  /** @format int64 */
  updated?: number;
  /** @format int64 */
  size?: number;
  extension?: string;
  charset?: string;
  mimeType?: string;
  metaData?: string;
  draft?: boolean;
  removed?: boolean;
  base64Content?: string;
  url?: string;
  /** Represents visibility settings of an entity, for example, an issue or a comment. */
  visibility?: Visibility;
  /** Represents a base article entity. */
  article?: BaseArticle;
  comment?: ArticleComment;
  $type?: string;
}

export interface AppearanceSettings {
  id?: string;
  /** Represents a time zone. */
  timeZone?: TimeZoneDescriptor;
  /** Represents date format. */
  dateFieldFormat?: DateFormatDescriptor;
  /** Company logo that is used in YouTrack. */
  logo?: Logo;
  $type?: string;
}

/** Shows if the board has any configuration problems. */
export interface AgileStatus {
  id?: string;
  valid?: boolean;
  hasJobs?: boolean;
  errors?: string[];
  warnings?: string[];
  $type?: string;
}

/** Stores users and groups that have access to an agile board. */
export interface AgileSharingSettings {
  id?: string;
  permittedGroups?: UserGroup[];
  permittedUsers?: User[];
  $type?: string;
}

/** Represents settings for a single board column */
export interface AgileColumn {
  id?: string;
  presentation?: string;
  isResolved?: boolean;
  /** @format int32 */
  ordinal?: number;
  /** Agile board columns settings. */
  parent?: ColumnSettings;
  /** Represents WIP limits for particular column. If they are not satisfied, the column will be highlighted in UI. */
  wipLimit?: WIPLimit;
  fieldValues?: AgileColumnFieldValue[];
  $type?: string;
}

export interface Agile {
  id?: string;
  name?: string;
  owner?: User;
  visibleFor?: UserGroup;
  visibleForProjectBased?: boolean;
  updateableBy?: UserGroup;
  updateableByProjectBased?: boolean;
  /** Stores users and groups that have access to an agile board. */
  readSharingSettings?: AgileSharingSettings;
  /** Stores users and groups that have access to an agile board. */
  updateSharingSettings?: AgileSharingSettings;
  orphansAtTheTop?: boolean;
  hideOrphansSwimlane?: boolean;
  estimationField?: CustomField;
  originalEstimationField?: CustomField;
  projects?: Project[];
  sprints?: Sprint[];
  currentSprint?: Sprint;
  /** Agile board columns settings. */
  columnSettings?: ColumnSettings;
  /** Base entity for different swimlane settings */
  swimlaneSettings?: SwimlaneSettings;
  /** Describes sprints configuration. */
  sprintsSettings?: SprintsSettings;
  /** Describes rules that define which colors are used for cards on the agile board. */
  colorCoding?: ColorCoding;
  /** Shows if the board has any configuration problems. */
  status?: AgileStatus;
  $type?: string;
}

export type ActivityItem = BaseActivityItem &
  (
    | BaseActivityItemTypeMapping<"ActivityItem", ActivityItem>
    | BaseActivityItemTypeMapping<
        "VcsChangeActivityItem",
        VcsChangeActivityItem
      >
    | BaseActivityItemTypeMapping<"WorkItemActivityItem", WorkItemActivityItem>
    | BaseActivityItemTypeMapping<
        "WorkItemAuthorActivityItem",
        WorkItemAuthorActivityItem
      >
    | BaseActivityItemTypeMapping<
        "WorkItemDurationActivityItem",
        WorkItemDurationActivityItem
      >
    | BaseActivityItemTypeMapping<
        "WorkItemTypeActivityItem",
        WorkItemTypeActivityItem
      >
    | BaseActivityItemTypeMapping<"SprintActivityItem", SprintActivityItem>
    | BaseActivityItemTypeMapping<
        "CreatedDeletedActivityItem",
        CreatedDeletedActivityItem
      >
    | BaseActivityItemTypeMapping<
        "AttachmentActivityItem",
        AttachmentActivityItem
      >
    | BaseActivityItemTypeMapping<"CommentActivityItem", CommentActivityItem>
    | BaseActivityItemTypeMapping<
        "IssueCreatedActivityItem",
        IssueCreatedActivityItem
      >
    | BaseActivityItemTypeMapping<
        "IssueResolvedActivityItem",
        IssueResolvedActivityItem
      >
    | BaseActivityItemTypeMapping<
        "SingleValueActivityItem",
        SingleValueActivityItem
      >
    | BaseActivityItemTypeMapping<
        "SimpleValueActivityItem",
        SimpleValueActivityItem
      >
    | BaseActivityItemTypeMapping<
        "TextMarkupActivityItem",
        TextMarkupActivityItem
      >
    | BaseActivityItemTypeMapping<
        "UsesMarkupActivityItem",
        UsesMarkupActivityItem
      >
    | BaseActivityItemTypeMapping<"ProjectActivityItem", ProjectActivityItem>
    | BaseActivityItemTypeMapping<
        "MultiValueActivityItem",
        MultiValueActivityItem
      >
    | BaseActivityItemTypeMapping<
        "CommentAttachmentsActivityItem",
        CommentAttachmentsActivityItem
      >
    | BaseActivityItemTypeMapping<"LinksActivityItem", LinksActivityItem>
    | BaseActivityItemTypeMapping<"TagsActivityItem", TagsActivityItem>
    | BaseActivityItemTypeMapping<"VotersActivityItem", VotersActivityItem>
    | BaseActivityItemTypeMapping<
        "VisibilityActivityItem",
        VisibilityActivityItem
      >
    | BaseActivityItemTypeMapping<
        "VisibilityGroupActivityItem",
        VisibilityGroupActivityItem
      >
    | BaseActivityItemTypeMapping<
        "VisibilityUserActivityItem",
        VisibilityUserActivityItem
      >
    | BaseActivityItemTypeMapping<
        "CustomFieldActivityItem",
        CustomFieldActivityItem
      >
    | BaseActivityItemTypeMapping<
        "TextCustomFieldActivityItem",
        TextCustomFieldActivityItem
      >
  );

export interface ActivityCursorPage {
  id?: string;
  activities?: ActivityItem[];
  afterCursor?: string;
  beforeCursor?: string;
  hasAfter?: boolean;
  hasBefore?: boolean;
  reverse?: boolean;
  $type?: string;
}

export interface ActivityCategory {
  id?: string;
  $type?: string;
}

/** Represents a field value or values, parameterizing agile column. */
export type AgileColumnFieldValue = BaseDatabaseAttributeValue & {
  id?: string;
  name?: string;
  isResolved?: boolean;
};

/** Represents a group containing all users including guest. */
export type AllUsersGroup = BaseUserGroup;

export type Article = BaseBaseArticle & {
  id?: string;
  attachments?: ArticleAttachment[];
  childArticles?: Article[];
  comments?: ArticleComment[];
  content?: string;
  /** @format int64 */
  created?: number;
  /** For an article that was imported from another service, this entity represents the reference to the article in the external system. */
  externalArticle?: ExternalArticle;
  hasChildren?: boolean;
  hasStar?: boolean;
  idReadable?: string;
  /** @format int64 */
  ordinal?: number;
  parentArticle?: Article;
  pinnedComments?: ArticleComment[];
  project?: Project;
  reporter?: User;
  summary?: string;
  tags?: Tag[];
  /** @format int64 */
  updated?: number;
  updatedBy?: User;
  /** Represents visibility settings of an entity, for example, an issue or a comment. */
  visibility?: Visibility;
};

/** Represents a change in the list of attachments of an issue. */
export type AttachmentActivityItem = CreatedDeletedActivityItem & {
  id?: string;
  added?: IssueAttachment[];
  removed?: IssueAttachment[];
  target?: IssueAttachment;
};

export type AttributeBasedSwimlaneSettings = BaseSwimlaneSettings & {
  id?: string;
  /** Represents an issue property, which can be a predefined field, a custom field, a link, and so on. */
  field?: FilterField;
  values?: SwimlaneEntityAttributeValue[];
};

interface BaseBundle {
  id?: string;
  isUpdateable?: boolean;
  $type?: string;
}

/** Represents an integration with a VCS repository hosted on bitbucket.org. */
export type BitBucketChangesProcessor = VcsHostingChangesProcessor & {
  id?: string;
  /** Represents a cloud Bitbucket server. */
  server?: BitBucketServer;
};

/** Represents a cloud Bitbucket server. */
export type BitBucketServer = VcsHostingServer & {
  id?: string;
  url?: string;
};

/** Represents an integration with a VCS repository on a self-hosted Bitbucket server. */
export type BitbucketStandaloneChangesProcessor = VcsHostingChangesProcessor & {
  id?: string;
  /** Represents a self-hosted Bitbucket server. */
  server?: BitbucketStandaloneServer;
};

/** Represents a self-hosted Bitbucket server. */
export type BitbucketStandaloneServer = VcsHostingServer & {
  id?: string;
  url?: string;
};

export type BuildBundle = BaseBundle & {
  id?: string;
  values?: BuildBundleElement[];
};

/** Default settings for the build-type field. */
export type BuildBundleCustomFieldDefaults = BundleCustomFieldDefaults & {
  id?: string;
  bundle?: BuildBundle;
  defaultValues?: BuildBundleElement[];
};

export type BuildBundleElement = BaseBundleElement & {
  id?: string;
  /** @format int64 */
  assembleDate?: number;
};

/** Represents project settings for a build field. */
export type BuildProjectCustomField = BundleProjectCustomField & {
  id?: string;
  bundle?: BuildBundle;
  defaultValues?: BuildBundleElement[];
};

/** Represents custom field default settings for enumerated fields. */
export type BundleCustomFieldDefaults = BaseCustomFieldDefaults & {
  id?: string;
};

/** Represents project settings for a custom field with a defined set of values. */
export type BundleProjectCustomField = BaseProjectCustomField;

/** Stores the restricted visibility settings for the command. */
export type CommandLimitedVisibility = BaseCommandVisibility & {
  id?: string;
  permittedGroups?: UserGroup[];
  permittedUsers?: User[];
};

/** Comment is visible for all the users who can read the issue. */
export type CommandUnlimitedVisibility = BaseCommandVisibility;

/** Represents a change in the comments of an issue. */
export type CommentActivityItem = CreatedDeletedActivityItem & {
  id?: string;
  added?: IssueComment[];
  authorGroup?: UserGroup;
  removed?: IssueComment[];
  target?: IssueComment;
};

/** Represents a change in the `attachments` attribute of an IssueComment. */
export type CommentAttachmentsActivityItem = MultiValueActivityItem & {
  id?: string;
  added?: IssueAttachment[];
  removed?: IssueAttachment[];
  target?: IssueComment;
};

/** Represents an action when an entity is created or deleted in an issue. For example, a new comment is created in the issue. */
export type CreatedDeletedActivityItem = BaseActivityItem & {
  id?: string;
};

/** Represents an activity that affects a custom field of an issue. */
export type CustomFieldActivityItem = BaseActivityItem & {
  id?: string;
  added?: object;
  removed?: object;
  target?: Issue;
};

/** Represents a custom field of the issue. */
export type CustomFilterField = BaseFilterField & {
  id?: string;
  customField?: CustomField;
};

/** Represents a date-type custom field in the issue. */
export type DateIssueCustomField = SimpleIssueCustomField & {
  id?: string;
  value?: object;
};

export type EnumBundle = BaseBundle & {
  id?: string;
  values?: EnumBundleElement[];
};

/** Default settings for the enum-type field. */
export type EnumBundleCustomFieldDefaults = BundleCustomFieldDefaults & {
  id?: string;
  bundle?: EnumBundle;
  defaultValues?: EnumBundleElement[];
};

export type EnumBundleElement = LocalizableBundleElement & {
  id?: string;
};

/** Represents project settings for the enum field. */
export type EnumProjectCustomField = BundleProjectCustomField & {
  id?: string;
  bundle?: EnumBundle;
  defaultValues?: EnumBundleElement[];
};

/** Sets a card color based on a value of some custom field. */
export type FieldBasedColorCoding = BaseColorCoding & {
  id?: string;
  prototype?: CustomField;
};

/** Represents the condition for showing a custom field. */
export type FieldBasedCondition = BaseCustomFieldCondition & {
  id?: string;
  /** Represents project settings for a custom field with a defined set of values. */
  field?: BundleProjectCustomField;
  values?: BundleElement[];
  showForNullValue?: boolean;
};

/** Represents a GitHub integration configured for a project. */
export type GitHubChangesProcessor = VcsHostingChangesProcessor & {
  id?: string;
  /** Represents a GitHub server. */
  server?: GitHubServer;
};

/** Represents a GitHub server. */
export type GitHubServer = VcsHostingServer & {
  id?: string;
  url?: string;
};

/** Represents a GitLab integration configured for a project. */
export type GitLabChangesProcessor = VcsHostingChangesProcessor & {
  id?: string;
  /** Represents a GitLab server. */
  server?: GitLabServer;
};

/** Represents a GitLab server. */
export type GitLabServer = VcsHostingServer & {
  id?: string;
  url?: string;
};

/** Represents a Gitea integration configured for a project. */
export type GiteaChangesProcessor = VcsHostingChangesProcessor & {
  id?: string;
  /** Represents a Gitea server. */
  server?: GiteaServer;
};

/** Represents a Gitea server. */
export type GiteaServer = VcsHostingServer & {
  id?: string;
  url?: string;
};

/** Represents a Gogs integration configured for a project. */
export type GogsChangesProcessor = VcsHostingChangesProcessor & {
  id?: string;
  /** Represents a Gogs server. */
  server?: GogsServer;
};

/** Represents a Gogs server. */
export type GogsServer = VcsHostingServer & {
  id?: string;
  url?: string;
};

/** Represents project settings for a group custom field. */
export type GroupProjectCustomField = BaseProjectCustomField & {
  id?: string;
  defaultValues?: UserGroup[];
};

/** Swimlane settings for the case, when each swimlane is represented by an issue and contains this issue's subtasks. */
export type IssueBasedSwimlaneSettings = BaseSwimlaneSettings & {
  id?: string;
  /** Represents an issue property, which can be a predefined field, a custom field, a link, and so on. */
  field?: FilterField;
  /** Represents single swimlane in case of IssueBasedSwimlaneSettings. */
  defaultCardType?: SwimlaneValue;
  values?: SwimlaneValue[];
};

/** Represents an event when a user creates a new issue. */
export type IssueCreatedActivityItem = CreatedDeletedActivityItem & {
  id?: string;
  added?: Issue[];
  removed?: Issue[];
  target?: Issue;
};

/** Represents an event when a user resolves an issue. */
export type IssueResolvedActivityItem = SimpleValueActivityItem & {
  id?: string;
  /** @format int64 */
  added?: number;
  /** @format int64 */
  removed?: number;
};

/** <p>Deprecated. Use `Tag` instead.</p> */
export type IssueTag = Tag;

export type IssueWorkItem = BaseBaseWorkItem & {
  id?: string;
  author?: User;
  creator?: User;
  text?: string;
  textPreview?: string;
  type?: WorkItemType;
  /** @format int64 */
  created?: number;
  /** @format int64 */
  updated?: number;
  /** Represents the duration value and its visual presentation. */
  duration?: DurationValue;
  /** @format int64 */
  date?: number;
  issue?: Issue;
  attributes?: WorkItemAttribute[];
};

/** Represents a Jenkins integration configured for a project. */
export type JenkinsChangesProcessor = BaseChangesProcessor & {
  id?: string;
  /** Represents a Jenkins server. */
  server?: JenkinsServer;
};

/** Represents a Jenkins server. */
export type JenkinsServer = BaseVcsServer & {
  id?: string;
  url?: string;
};

/** Represents visibility limited to several users and/or groups. */
export type LimitedVisibility = BaseVisibility & {
  id?: string;
  permittedGroups?: UserGroup[];
  permittedUsers?: User[];
};

/**
 * Represents a change in the `issues` attribute of an IssueLink entity.
 * That is, each issue has the `links` attribute that contains an array of IssueLink entities.
 * Each of them represents a link between the target issue and a collection of issues.
 * For example, a set of issues to which the target one is linked as "Duplicated by".
 * The change in the list of these issues is represented by `LinksActivityItem` entity.
 */
export type LinksActivityItem = MultiValueActivityItem & {
  id?: string;
  added?: Issue[];
  removed?: Issue[];
  target?: Issue;
};

/** Represents field value that can be localized. */
export type LocalizableBundleElement = BaseBundleElement & {
  id?: string;
  localizedName?: string;
};

export type Me = BaseUser & {
  id?: string;
};

/** Represents a multi-value build-type custom field in the issue. */
export type MultiBuildIssueCustomField = DatabaseMultiValueIssueCustomField & {
  id?: string;
  value?: BuildBundleElement[];
};

/** Represents a multi-value enum-type custom field in the issue. */
export type MultiEnumIssueCustomField = DatabaseMultiValueIssueCustomField & {
  id?: string;
  value?: EnumBundleElement[];
};

/** Represents a multi-value group-type custom field in the issue. */
export type MultiGroupIssueCustomField = DatabaseMultiValueIssueCustomField & {
  id?: string;
  value?: UserGroup[];
};

/** Represents a multi-value owned-type custom field in the issue. */
export type MultiOwnedIssueCustomField = DatabaseMultiValueIssueCustomField & {
  id?: string;
  value?: OwnedBundleElement[];
};

/** Represents a multi-value user-type custom field in the issue. */
export type MultiUserIssueCustomField = DatabaseMultiValueIssueCustomField & {
  id?: string;
  value?: User[];
};

/** Represents a change in an entity attribute that has type of `Array of &lt;Entities&gt;`. */
export type MultiValueActivityItem = BaseActivityItem & {
  id?: string;
  added?: object;
  removed?: object;
};

/** Represents a custom field that may have multiple values in the issue. */
export type DatabaseMultiValueIssueCustomField = BaseIssueCustomField & {
  id?: string;
  value?: object;
};

/** Represents a multi-value version-type custom field in the issue. */
export type MultiVersionIssueCustomField =
  DatabaseMultiValueIssueCustomField & {
    id?: string;
    value?: VersionBundleElement[];
  };

/** Represents a group of users. */
export type NestedGroup = BaseUserGroup;

export type OwnedBundle = BaseBundle & {
  id?: string;
  values?: OwnedBundleElement[];
};

/** Default settings for the owned-type field. */
export type OwnedBundleCustomFieldDefaults = BundleCustomFieldDefaults & {
  id?: string;
  bundle?: OwnedBundle;
  defaultValues?: OwnedBundleElement[];
};

export type OwnedBundleElement = BaseBundleElement & {
  id?: string;
  owner?: User;
};

/** Represents project settings for an owned field. */
export type OwnedProjectCustomField = BundleProjectCustomField & {
  id?: string;
  bundle?: OwnedBundle;
  defaultValues?: OwnedBundleElement[];
};

/** Represents the period field in the issue. */
export type PeriodIssueCustomField = BaseIssueCustomField & {
  id?: string;
  /** Represents the period field value. */
  value?: PeriodValue;
};

/** Represents project settings for the period field. */
export type PeriodProjectCustomField = BaseProjectCustomField & {
  id?: string;
};

/**
 * Represents a predefined field of the issue. Predefined fields are always present in an issue and
 *             |cannot be customized in a project. For example, `project`, `created`,
 *             |`updated`, `tags`, and so on.
 */
export type PredefinedFilterField = BaseFilterField & {
  id?: string;
};

export type Project = BaseIssueFolder & {
  id?: string;
  archived?: boolean;
  createdBy?: User;
  customFields?: object;
  description?: string;
  fromEmail?: string;
  iconUrl?: string;
  issues?: Issue[];
  leader?: User;
  name?: string;
  replyToEmail?: string;
  shortName?: string;
  /** @format int64 */
  startingNumber?: number;
  team?: ProjectTeam;
  template?: boolean;
};

/** Represents the change in the project attribute on an issue. */
export type ProjectActivityItem = SingleValueActivityItem & {
  id?: string;
  /** Stores information about a project where the issue belongs or previously belonged. This entity appears as part of the ProjectActivityItem object. */
  added?: IssueKey;
  /** Stores information about a project where the issue belongs or previously belonged. This entity appears as part of the ProjectActivityItem object. */
  removed?: IssueKey;
  target?: Issue;
};

/** Lets you set a color for a card based on its project. */
export type ProjectBasedColorCoding = BaseColorCoding & {
  id?: string;
  projectColors?: ProjectColor[];
};

export type ProjectTeam = BaseUserGroup & {
  project?: Project;
};

/** Represents a group containing all users excluding guest. */
export type RegisteredUsersGroup = BaseUserGroup;

export type SavedQuery = WatchFolder & {
  id?: string;
  query?: string;
  issues?: Issue[];
  visibleFor?: UserGroup;
  updateableBy?: UserGroup;
  /** Stores users and groups that have access to a tag or a saved search. */
  readSharingSettings?: WatchFolderSharingSettings;
  /** Stores users and groups that have access to a tag or a saved search. */
  updateSharingSettings?: WatchFolderSharingSettings;
};

/** Represents a simple-type custom field in the issue. */
export type SimpleIssueCustomField = BaseIssueCustomField & {
  id?: string;
  value?: object;
};

/** Represents project settings for the fields of the following types: `integer`, `float`, `date`, `date and time`, `string`. */
export type SimpleProjectCustomField = BaseProjectCustomField & {
  id?: string;
};

/**
 * Represents the change in attributes of a simple type in the target entity:
 * Issue, IssueComment, WorkItem, IssueAttachment.
 */
export type SimpleValueActivityItem = SingleValueActivityItem & {
  id?: string;
  added?: object;
  removed?: object;
};

/** Represents a single-value build-type custom field in the issue. */
export type SingleBuildIssueCustomField =
  DatabaseSingleValueIssueCustomField & {
    id?: string;
    value?: BuildBundleElement;
  };

/** Represents a single-value enum-type custom field in the issue. */
export type SingleEnumIssueCustomField = DatabaseSingleValueIssueCustomField & {
  id?: string;
  value?: EnumBundleElement;
};

/** Represents a single-value group-type custom field in the issue. */
export type SingleGroupIssueCustomField =
  DatabaseSingleValueIssueCustomField & {
    id?: string;
    value?: UserGroup;
  };

/** Represents a single-value owned-type custom field in the issue. */
export type SingleOwnedIssueCustomField =
  DatabaseSingleValueIssueCustomField & {
    id?: string;
    value?: OwnedBundleElement;
  };

/** Represents a single-value user-type custom field in the issue. */
export type SingleUserIssueCustomField = DatabaseSingleValueIssueCustomField & {
  id?: string;
  value?: User;
};

/** Describe change of properties that can have single value. */
export type SingleValueActivityItem = BaseActivityItem & {
  id?: string;
  added?: object;
  removed?: object;
};

/** Represents a a single-value custom field in the issue. */
export type DatabaseSingleValueIssueCustomField = BaseIssueCustomField & {
  id?: string;
  value?: object;
};

/** Represents a single-value version-type custom field in the issue. */
export type SingleVersionIssueCustomField =
  DatabaseSingleValueIssueCustomField & {
    id?: string;
    value?: VersionBundleElement;
  };

/** Represents a Space integration configured for a project. */
export type SpaceChangesProcessor = VcsHostingChangesProcessor & {
  id?: string;
  /** Represents a Space server. */
  server?: SpaceServer;
};

/** Represents a Space server. */
export type SpaceServer = VcsHostingServer & {
  id?: string;
  url?: string;
};

/** Represents a change in the issue when it was added to or removed from an agile board sprint. */
export type SprintActivityItem = MultiValueActivityItem & {
  id?: string;
  target?: Issue;
  removed?: Sprint[];
  added?: Sprint[];
};

export type StateBundle = BaseBundle & {
  id?: string;
  values?: StateBundleElement[];
};

/** Default settings for the state-type field. */
export type StateBundleCustomFieldDefaults = BundleCustomFieldDefaults & {
  id?: string;
  bundle?: StateBundle;
  defaultValues?: StateBundleElement[];
};

export type StateBundleElement = LocalizableBundleElement & {
  id?: string;
  isResolved?: boolean;
};

/** Represents a single-value state-type custom field in the issue. */
export type StateIssueCustomField = DatabaseSingleValueIssueCustomField & {
  id?: string;
  value?: StateBundleElement;
};

/** Represents the issue custom field that is managed by a state-machine rule in workflow. */
export type StateMachineIssueCustomField =
  DatabaseSingleValueIssueCustomField & {
    id?: string;
    value?: object;
    /** Represents a transition from one value to another for a custom field that is managed by a state-machine rule in workflow. */
    event?: Event;
    possibleEvents?: Event[];
  };

/** Represents project settings for a state field. */
export type StateProjectCustomField = BundleProjectCustomField & {
  id?: string;
  bundle?: StateBundle;
  defaultValues?: StateBundleElement[];
};

/** Represents a single swimlane in case of AttributeBasedSwimlaneSettings. */
export type SwimlaneEntityAttributeValue = BaseDatabaseAttributeValue & {
  id?: string;
  name?: string;
  isResolved?: boolean;
};

export type Tag = WatchFolder & {
  id?: string;
  issues?: Issue[];
  /** Represents the style settings of the field in YouTrack. */
  color?: FieldStyle;
  untagOnResolve?: boolean;
  visibleFor?: UserGroup;
  updateableBy?: UserGroup;
  /** Stores users and groups that have access to a tag or a saved search. */
  readSharingSettings?: WatchFolderSharingSettings;
  /** Stores users and groups that have access to a tag. */
  tagSharingSettings?: TagSharingSettings;
  /** Stores users and groups that have access to a tag or a saved search. */
  updateSharingSettings?: WatchFolderSharingSettings;
};

/** Represents a change in the list of tags of an issue. */
export type TagsActivityItem = MultiValueActivityItem & {
  id?: string;
  added?: Tag[];
  removed?: Tag[];
  target?: Issue;
};

/** Represents a TeamCity integration configured for a project. */
export type TeamcityChangesProcessor = BaseChangesProcessor & {
  id?: string;
  /** Represents a TeamCity server. */
  server?: TeamcityServer;
};

/** Represents a TeamCity server. */
export type TeamcityServer = BaseVcsServer & {
  id?: string;
  url?: string;
};

/** Represents an activity that affects a custom field of the `text` type of an issue. */
export type TextCustomFieldActivityItem = CustomFieldActivityItem & {
  id?: string;
  added?: string;
  markup?: string;
  removed?: string;
  target?: Issue;
};

/** Represents the issue custom field of the `text` type. */
export type TextIssueCustomField = BaseIssueCustomField & {
  id?: string;
  /** Represents a value of the text field. Returns both source and rendered text. */
  value?: TextFieldValue;
};

/**
 * Represents a change in a `String`-type attribute with the support of markup:
 * `description` in an Issue or IssueWorkItem, and the `text` of the IssueComment.
 * This entity lets you get the rendered text after the change.
 */
export type TextMarkupActivityItem = SimpleValueActivityItem & {
  id?: string;
  added?: string;
  markup?: string;
  removed?: string;
};

/** Represents settings of the text-type field in the project. */
export type TextProjectCustomField = SimpleProjectCustomField & {
  id?: string;
};

/** Represents unlimited visibility. When access to an entity is not restricted, the visibility attribute of this entity has the type `UnlimitedVisibility`. Entities of this type do not have any attributes. */
export type UnlimitedVisibility = BaseVisibility;

export type UserBundle = BaseBundle & {
  id?: string;
  groups?: UserGroup[];
  individuals?: User[];
  aggregatedUsers?: User[];
};

/** Represents default settings for the user-type field. */
export type UserCustomFieldDefaults = BaseCustomFieldDefaults & {
  id?: string;
  bundle?: UserBundle;
  defaultValues?: User[];
};

/** Represents project settings for a user field. */
export type UserProjectCustomField = BundleProjectCustomField & {
  id?: string;
  bundle?: UserBundle;
  defaultValues?: User[];
};

/**
 * Represents the change of the boolean flag that indicates whether YouTrack Wiki or Markdown
 * is used in the target entity as a markup language. If `true`, then the markdown is used.
 * Otherwise, YouTrack Wiki markup.
 */
export type UsesMarkupActivityItem = SimpleValueActivityItem & {
  id?: string;
  added?: boolean;
  markup?: string;
  removed?: boolean;
};

/** Represents an update in the list of VCS changes of an issue. */
export type VcsChangeActivityItem = CreatedDeletedActivityItem & {
  id?: string;
  removed?: VcsChange[];
  added?: VcsChange[];
  author?: User;
};

/** The basic entity that represents a VCS integration configured for a project. */
export type VcsHostingChangesProcessor = BaseChangesProcessor & {
  id?: string;
  /** The basic entity that represents a VCS server. */
  server?: VcsHostingServer;
  path?: string;
  branchSpecification?: string;
  committers?: UserGroup;
};

/** The basic entity that represents a VCS server. */
export type VcsHostingServer = BaseVcsServer & {
  id?: string;
  url?: string;
};

/** Represents a VCS change author who could not be associated with any YouTrack user account. */
export type VcsUnresolvedUser = BaseUser & {
  id?: string;
  name?: string;
};

export type VersionBundle = BaseBundle & {
  id?: string;
  values?: VersionBundleElement[];
};

/** Default settings for the version-type field. */
export type VersionBundleCustomFieldDefaults = BundleCustomFieldDefaults & {
  id?: string;
  bundle?: VersionBundle;
  defaultValues?: VersionBundleElement[];
};

export type VersionBundleElement = BaseBundleElement & {
  id?: string;
  archived?: boolean;
  released?: boolean;
  /** @format int64 */
  releaseDate?: number;
  /** @format int64 */
  startDate?: number;
};

/** Represents project settings for a version field. */
export type VersionProjectCustomField = BundleProjectCustomField & {
  id?: string;
  bundle?: VersionBundle;
  defaultValues?: VersionBundleElement[];
};

/**
 * Represents the changes of properties responsible for visibility restriction.
 * Can be <a href="api-entity-VisibilityGroupActivityItem.topic">VisibilityGroupActivityItem</a> or <a href="api-entity-VisibilityUserActivityItem.topic">VisibilityUserActivityItem</a>
 */
export type VisibilityActivityItem = MultiValueActivityItem & {
  id?: string;
  targetMember?: string;
  targetSubMember?: string;
};

/** Represents the event when a user adds or removes a group to/from the Visibility settings of the target entity. */
export type VisibilityGroupActivityItem = VisibilityActivityItem & {
  id?: string;
  added?: UserGroup[];
  removed?: UserGroup[];
  targetMember?: string;
  targetSubMember?: string;
};

/** Represents the event when a user adds or removes a user to/from the Visibility settings of the target entity. */
export type VisibilityUserActivityItem = VisibilityActivityItem & {
  id?: string;
  added?: User[];
  removed?: User[];
  targetMember?: string;
  targetSubMember?: string;
};

/** Represents a change in the list of voters of an issue. */
export type VotersActivityItem = MultiValueActivityItem & {
  id?: string;
  added?: User[];
  removed?: User[];
  target?: Issue;
};

/** `WatchFolder` is a common abstract ancestor for saved searches and tags. */
export type WatchFolder = BaseIssueFolder & {
  id?: string;
  owner?: User;
  visibleFor?: UserGroup;
  updateableBy?: UserGroup;
  /** Stores users and groups that have access to a tag or a saved search. */
  readSharingSettings?: WatchFolderSharingSettings;
  /** Stores users and groups that have access to a tag or a saved search. */
  updateSharingSettings?: WatchFolderSharingSettings;
};

/** Represents a change in a list of work items in an issue. */
export type WorkItemActivityItem = CreatedDeletedActivityItem & {
  id?: string;
  target?: IssueWorkItem;
  removed?: IssueWorkItem[];
  added?: IssueWorkItem[];
};

/** Represents a change in the `author` attribute of a work item. */
export type WorkItemAuthorActivityItem = SingleValueActivityItem & {
  id?: string;
  target?: IssueWorkItem;
  removed?: User;
  added?: User;
};

/** Represents a change in the `duration` attribute of a work item. */
export type WorkItemDurationActivityItem = SingleValueActivityItem & {
  id?: string;
  target?: IssueWorkItem;
  /** Represents the duration value and its visual presentation. */
  removed?: DurationValue;
  /** Represents the duration value and its visual presentation. */
  added?: DurationValue;
};

/** Represents a change in the `type` attribute of the work item. */
export type WorkItemTypeActivityItem = MultiValueActivityItem & {
  id?: string;
  target?: IssueWorkItem;
  removed?: WorkItemType[];
  added?: WorkItemType[];
};

/** Represents visibility settings of an entity, for example, an issue or a comment. */
interface BaseVisibility {
  id?: string;
  $type?: string;
}

type BaseVisibilityTypeMapping<Key, Type> = {
  $type: Key;
} & Type;

/** The basic entity that represents a VCS or a build server. */
interface BaseVcsServer {
  id?: string;
  url?: string;
  $type?: string;
}

type BaseVcsServerTypeMapping<Key, Type> = {
  $type: Key;
} & Type;

interface BaseUserGroup {
  id?: string;
  name?: string;
  ringId?: string;
  /** @format int64 */
  usersCount?: number;
  icon?: string;
  allUsersGroup?: boolean;
  teamForProject?: Project;
  $type?: string;
}

type BaseUserGroupTypeMapping<Key, Type> = {
  $type: Key;
} & Type;

interface BaseUser {
  id?: string;
  login?: string;
  fullName?: string;
  email?: string;
  ringId?: string;
  guest?: boolean;
  online?: boolean;
  banned?: boolean;
  tags?: Tag[];
  savedQueries?: SavedQuery[];
  avatarUrl?: string;
  /** Represents a group of settings of a user profile in YouTrack. */
  profiles?: UserProfiles;
  $type?: string;
}

type BaseUserTypeMapping<Key, Type> = {
  $type: Key;
} & Type;

/** Base entity for different swimlane settings */
interface BaseSwimlaneSettings {
  id?: string;
  enabled?: boolean;
  $type?: string;
}

type BaseSwimlaneSettingsTypeMapping<Key, Type> = {
  $type: Key;
} & Type;

interface BaseProjectCustomField {
  id?: string;
  field?: CustomField;
  project?: Project;
  canBeEmpty?: boolean;
  emptyFieldText?: string;
  /** @format int32 */
  ordinal?: number;
  isPublic?: boolean;
  hasRunningJob?: boolean;
  /** Represents the condition for showing a custom field. */
  condition?: CustomFieldCondition;
  $type?: string;
}

type BaseProjectCustomFieldTypeMapping<Key, Type> = {
  $type: Key;
} & Type;

/** Represents an issue folder, such as a project, a saved search, or a tag. */
interface BaseIssueFolder {
  id?: string;
  name?: string;
  $type?: string;
}

type BaseIssueFolderTypeMapping<Key, Type> = {
  $type: Key;
} & Type;

interface BaseIssueCustomField {
  id?: string;
  name?: string;
  projectCustomField?: ProjectCustomField;
  value?: object;
  $type?: string;
}

type BaseIssueCustomFieldTypeMapping<Key, Type> = {
  $type: Key;
} & Type;

/** Represents an issue property, which can be a predefined field, a custom field, a link, and so on. */
interface BaseFilterField {
  id?: string;
  presentation?: string;
  name?: string;
  $type?: string;
}

type BaseFilterFieldTypeMapping<Key, Type> = {
  $type: Key;
} & Type;

/** Represents string reference to the value. */
interface BaseDatabaseAttributeValue {
  id?: string;
  $type?: string;
}

type BaseDatabaseAttributeValueTypeMapping<Key, Type> = {
  $type: Key;
} & Type;

interface BaseCustomFieldDefaults {
  id?: string;
  canBeEmpty?: boolean;
  emptyFieldText?: string;
  isPublic?: boolean;
  parent?: CustomField;
  $type?: string;
}

type BaseCustomFieldDefaultsTypeMapping<Key, Type> = {
  $type: Key;
} & Type;

/** Represents the condition for showing a custom field. */
interface BaseCustomFieldCondition {
  id?: string;
  parent?: ProjectCustomField;
  $type?: string;
}

type BaseCustomFieldConditionTypeMapping<Key, Type> = {
  $type: Key;
} & Type;

/** Visibility settings of the comment that is added along with the command. */
interface BaseCommandVisibility {
  id?: string;
  $type?: string;
}

type BaseCommandVisibilityTypeMapping<Key, Type> = {
  $type: Key;
} & Type;

/** Describes rules that define which colors are used for cards on the agile board. */
interface BaseColorCoding {
  id?: string;
  $type?: string;
}

type BaseColorCodingTypeMapping<Key, Type> = {
  $type: Key;
} & Type;

/** The basic entity that represents a VCS or a build server integration configured for a project. */
interface BaseChangesProcessor {
  id?: string;
  /** The basic entity that represents a VCS or a build server. */
  server?: VcsServer;
  project?: Project;
  relatedProjects?: Project[];
  enabled?: boolean;
  visibleForGroups?: UserGroup[];
  addComments?: boolean;
  lookupIssuesInBranchName?: boolean;
  $type?: string;
}

type BaseChangesProcessorTypeMapping<Key, Type> = {
  $type: Key;
} & Type;

/** Represents a field value in YouTrack. */
interface BaseBundleElement {
  id?: string;
  name?: string;
  bundle?: Bundle;
  description?: string;
  archived?: boolean;
  /** @format int32 */
  ordinal?: number;
  /** Represents the style settings of the field in YouTrack. */
  color?: FieldStyle;
  hasRunningJob?: boolean;
  $type?: string;
}

type BaseBundleElementTypeMapping<Key, Type> = {
  $type: Key;
} & Type;

type BaseBundleTypeMapping<Key, Type> = {
  $type: Key;
} & Type;

/** Represents a basic ancestor for work items. */
interface BaseBaseWorkItem {
  id?: string;
  $type?: string;
}

type BaseBaseWorkItemTypeMapping<Key, Type> = {
  $type: Key;
} & Type;

/** Represents a base article entity. */
interface BaseBaseArticle {
  id?: string;
  attachments?: ArticleAttachment[];
  content?: string;
  reporter?: User;
  summary?: string;
  /** Represents visibility settings of an entity, for example, an issue or a comment. */
  visibility?: Visibility;
  $type?: string;
}

type BaseBaseArticleTypeMapping<Key, Type> = {
  $type: Key;
} & Type;

interface BaseActivityItem {
  id?: string;
  added?: object;
  author?: User;
  category?: ActivityCategory;
  /** Represents an issue property, which can be a predefined field, a custom field, a link, and so on. */
  field?: FilterField;
  removed?: object;
  target?: object;
  targetMember?: string;
  /** @format int64 */
  timestamp?: number;
  $type?: string;
}

type BaseActivityItemTypeMapping<Key, Type> = {
  $type: Key;
} & Type;
