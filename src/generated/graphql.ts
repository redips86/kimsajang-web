import {useMutation, UseMutationOptions, useQuery, UseQueryOptions,} from "react-query";

export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};

function fetcher<TData, TVariables>(query: string, variables?: TVariables) {
  return async (): Promise<TData> => {
    const res = await fetch(process.env.ENDPOINT as string, {
      method: "POST",
      ...{ headers: { "Content-Type": "application/json" } },
      body: JSON.stringify({ query, variables }),
    });

    const json = await res.json();

    if (json.errors) {
      const { message } = json.errors[0];

      throw new Error(message);
    }

    return json.data;
  };
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type ICreateLocationInput = {
  /** 지역이름 */
  name: Scalars["String"];
};

export type ICreateUserInput = {
  /** 자기소개 */
  intro?: InputMaybe<Scalars["String"]>;
  /** 지역 */
  locationId?: InputMaybe<Scalars["Float"]>;
  /** 닉네임 */
  nickname?: InputMaybe<Scalars["String"]>;
  /** 업종 */
  sectorIds?: InputMaybe<Array<Scalars["Float"]>>;
};

export type ICreateUserTagInput = {
  /** Example field (placeholder) */
  exampleField: Scalars["Int"];
};

export type ILocation = {
  __typename?: "Location";
  /** 생성일시 */
  createdAt: Scalars["String"];
  /** 삭제여부 */
  deleted: Scalars["Boolean"];
  /** ID */
  id: Scalars["Int"];
  /** 지역명 */
  name: Scalars["String"];
  /** 수정일시 */
  updatedAt: Scalars["String"];
};

export type IMutation = {
  __typename?: "Mutation";
  createLocation: Scalars["String"];
  createUser: Scalars["Boolean"];
  createUserTag: IUserTag;
  removeLocation: ILocation;
  removeUser: Scalars["Boolean"];
  removeUserTag: Scalars["Float"];
  updateLocation: ILocation;
  updateUser: Scalars["Boolean"];
  updateUserTag: IUserTag;
};

export type IMutationCreateLocationArgs = {
  createLocationInput: ICreateLocationInput;
};

export type IMutationCreateUserArgs = {
  createUserInput: ICreateUserInput;
};

export type IMutationCreateUserTagArgs = {
  createUserTagInput: ICreateUserTagInput;
};

export type IMutationRemoveLocationArgs = {
  id: Scalars["Int"];
};

export type IMutationRemoveUserArgs = {
  id: Scalars["Int"];
};

export type IMutationRemoveUserTagArgs = {
  id: Scalars["Int"];
};

export type IMutationUpdateLocationArgs = {
  updateLocationInput: IUpdateLocationInput;
};

export type IMutationUpdateUserArgs = {
  updateUserInput: IUpdateUserInput;
};

export type IMutationUpdateUserTagArgs = {
  updateUserTagInput: IUpdateUserTagInput;
};

export type IQuery = {
  __typename?: "Query";
  location: ILocation;
  locations: Array<ILocation>;
  user: IUser;
  userTag: IUserTag;
  userTags: Array<IUserTag>;
  users: Array<IUser>;
};

export type IQueryLocationArgs = {
  id: Scalars["Int"];
};

export type IQueryUserArgs = {
  id: Scalars["Int"];
};

export type IQueryUserTagArgs = {
  id: Scalars["Int"];
};

export type IUpdateLocationInput = {
  /** 지역 ID */
  id: Scalars["Int"];
  /** 지역이름 */
  name?: InputMaybe<Scalars["String"]>;
};

export type IUpdateUserInput = {
  /** 사용자 ID */
  id: Scalars["Int"];
  /** 자기소개 */
  intro?: InputMaybe<Scalars["String"]>;
  /** 지역 */
  locationId?: InputMaybe<Scalars["Float"]>;
  /** 닉네임 */
  nickname?: InputMaybe<Scalars["String"]>;
  /** 업종 */
  sectorIds?: InputMaybe<Array<Scalars["Float"]>>;
};

export type IUpdateUserTagInput = {
  /** Example field (placeholder) */
  exampleField?: InputMaybe<Scalars["Int"]>;
  id: Scalars["Int"];
};

export type IUser = {
  __typename?: "User";
  /** 생성일시 */
  createdAt: Scalars["String"];
  /** 삭제여부 */
  deleted: Scalars["Boolean"];
  /** ID */
  id: Scalars["Int"];
  /** 자기 소개 */
  intro?: Maybe<Scalars["String"]>;
  /** 지역 */
  location?: Maybe<ILocation>;
  /** 닉네임 */
  nickname?: Maybe<Scalars["String"]>;
  /** 수정일시 */
  updatedAt: Scalars["String"];
};

export type IUserTag = {
  __typename?: "UserTag";
  /** 생성일시 */
  createdAt: Scalars["String"];
  /** Example field (placeholder) */
  tagId: Scalars["Int"];
  /** 수정일시 */
  updatedAt: Scalars["String"];
  /** Example field (placeholder) */
  userId: Scalars["Int"];
};

export type ICreateUserMutationVariables = Exact<{
  createUserInput: ICreateUserInput;
}>;

export type ICreateUserMutation = {
  __typename?: "Mutation";
  createUser: boolean;
};

export type IUsersQueryVariables = Exact<{ [key: string]: never }>;

export type IUsersQuery = {
  __typename?: "Query";
  users: Array<{
    __typename?: "User";
    createdAt: string;
    deleted: boolean;
    id: number;
    intro?: string | null;
    nickname?: string | null;
    updatedAt: string;
    location?: {
      __typename?: "Location";
      createdAt: string;
      deleted: boolean;
      id: number;
      name: string;
      updatedAt: string;
    } | null;
  }>;
};

export const CreateUserDocument = `
    mutation CreateUser($createUserInput: CreateUserInput!) {
  createUser(createUserInput: $createUserInput)
}
    `;
export const useCreateUserMutation = <TError = unknown, TContext = unknown>(
  options?: UseMutationOptions<
    ICreateUserMutation,
    TError,
    ICreateUserMutationVariables,
    TContext
  >
) =>
  useMutation<
    ICreateUserMutation,
    TError,
    ICreateUserMutationVariables,
    TContext
  >(
    ["CreateUser"],
    (variables?: ICreateUserMutationVariables) =>
      fetcher<ICreateUserMutation, ICreateUserMutationVariables>(
        CreateUserDocument,
        variables
      )(),
    options
  );
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
export const useUsersQuery = <TData = IUsersQuery, TError = unknown>(
  variables?: IUsersQueryVariables,
  options?: UseQueryOptions<IUsersQuery, TError, TData>
) =>
  useQuery<IUsersQuery, TError, TData>(
    variables === undefined ? ["Users"] : ["Users", variables],
    fetcher<IUsersQuery, IUsersQueryVariables>(UsersDocument, variables),
    options
  );
