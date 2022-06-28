import {useQuery, UseQueryOptions} from 'react-query';

export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };

function fetcher<TData, TVariables>(endpoint: string, requestInit: RequestInit, query: string, variables?: TVariables) {
  return async (): Promise<TData> => {
    const res = await fetch(endpoint, {
      method: 'POST',
      ...requestInit,
      body: JSON.stringify({ query, variables }),
    });

    const json = await res.json();

    if (json.errors) {
      const { message } = json.errors[0];

      throw new Error(message);
    }

    return json.data;
  }
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type CreateLocationInput = {
  /** 지역이름 */
  name: Scalars['String'];
};

export type CreateUserInput = {
  /** 자기소개 */
  intro?: InputMaybe<Scalars['String']>;
  /** 지역 */
  locationId?: InputMaybe<Scalars['Float']>;
  /** 닉네임 */
  nickname?: InputMaybe<Scalars['String']>;
  /** 업종 */
  sectorIds?: InputMaybe<Array<Scalars['Float']>>;
};

export type CreateUserTagInput = {
  /** Example field (placeholder) */
  exampleField: Scalars['Int'];
};

export type Location = {
  __typename?: 'Location';
  /** 생성일시 */
  createdAt: Scalars['String'];
  /** 삭제여부 */
  deleted: Scalars['Boolean'];
  /** ID */
  id: Scalars['Int'];
  /** 지역명 */
  name: Scalars['String'];
  /** 수정일시 */
  updatedAt: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createLocation: Scalars['String'];
  createUser: Scalars['Boolean'];
  createUserTag: UserTag;
  removeLocation: Location;
  removeUser: Scalars['Boolean'];
  removeUserTag: Scalars['Float'];
  updateLocation: Location;
  updateUser: Scalars['Boolean'];
  updateUserTag: UserTag;
};


export type MutationCreateLocationArgs = {
  createLocationInput: CreateLocationInput;
};


export type MutationCreateUserArgs = {
  createUserInput: CreateUserInput;
};


export type MutationCreateUserTagArgs = {
  createUserTagInput: CreateUserTagInput;
};


export type MutationRemoveLocationArgs = {
  id: Scalars['Int'];
};


export type MutationRemoveUserArgs = {
  id: Scalars['Int'];
};


export type MutationRemoveUserTagArgs = {
  id: Scalars['Int'];
};


export type MutationUpdateLocationArgs = {
  updateLocationInput: UpdateLocationInput;
};


export type MutationUpdateUserArgs = {
  updateUserInput: UpdateUserInput;
};


export type MutationUpdateUserTagArgs = {
  updateUserTagInput: UpdateUserTagInput;
};

export type Query = {
  __typename?: 'Query';
  location: Location;
  locations: Array<Location>;
  user: User;
  userTag: UserTag;
  userTags: Array<UserTag>;
  users: Array<User>;
};


export type QueryLocationArgs = {
  id: Scalars['Int'];
};


export type QueryUserArgs = {
  id: Scalars['Int'];
};


export type QueryUserTagArgs = {
  id: Scalars['Int'];
};

export type UpdateLocationInput = {
  /** 지역 ID */
  id: Scalars['Int'];
  /** 지역이름 */
  name?: InputMaybe<Scalars['String']>;
};

export type UpdateUserInput = {
  /** 사용자 ID */
  id: Scalars['Int'];
  /** 자기소개 */
  intro?: InputMaybe<Scalars['String']>;
  /** 지역 */
  locationId?: InputMaybe<Scalars['Float']>;
  /** 닉네임 */
  nickname?: InputMaybe<Scalars['String']>;
  /** 업종 */
  sectorIds?: InputMaybe<Array<Scalars['Float']>>;
};

export type UpdateUserTagInput = {
  /** Example field (placeholder) */
  exampleField?: InputMaybe<Scalars['Int']>;
  id: Scalars['Int'];
};

export type User = {
  __typename?: 'User';
  /** 생성일시 */
  createdAt: Scalars['String'];
  /** 삭제여부 */
  deleted: Scalars['Boolean'];
  /** ID */
  id: Scalars['Int'];
  /** 자기 소개 */
  intro?: Maybe<Scalars['String']>;
  /** 지역 */
  location?: Maybe<Location>;
  /** 닉네임 */
  nickname?: Maybe<Scalars['String']>;
  /** 수정일시 */
  updatedAt: Scalars['String'];
};

export type UserTag = {
  __typename?: 'UserTag';
  /** 생성일시 */
  createdAt: Scalars['String'];
  /** Example field (placeholder) */
  tagId: Scalars['Int'];
  /** 수정일시 */
  updatedAt: Scalars['String'];
  /** Example field (placeholder) */
  userId: Scalars['Int'];
};

export type UsersQueryVariables = Exact<{ [key: string]: never; }>;


export type UsersQuery = { __typename?: 'Query', users: Array<{ __typename?: 'User', createdAt: string, deleted: boolean, id: number, intro?: string | null, nickname?: string | null, updatedAt: string, location?: { __typename?: 'Location', createdAt: string, deleted: boolean, id: number, name: string, updatedAt: string } | null }> };


export const UsersDocument = `
    query Users {
  users {
    createdAt
    deleted
    id
    intro
    location {
      createdAt
      deleted
      id
      name
      updatedAt
    }
    nickname
    updatedAt
  }
}
    `;
export const useUsersQuery = <
      TData = UsersQuery,
      TError = unknown
    >(
      dataSource: { endpoint: string, fetchParams?: RequestInit },
      variables?: UsersQueryVariables,
      options?: UseQueryOptions<UsersQuery, TError, TData>
    ) =>
    useQuery<UsersQuery, TError, TData>(
      variables === undefined ? ['Users'] : ['Users', variables],
      fetcher<UsersQuery, UsersQueryVariables>(dataSource.endpoint, dataSource.fetchParams || {}, UsersDocument, variables),
      options
    );