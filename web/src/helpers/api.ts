import axios from "axios";

export const BASE_URL = import.meta.env.VITE_APP_URL;

const request = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

type ResponseObject<T> = {
  data: T;
  error?: string;
  message?: string;
};

export function getSystemStatus() {
  return request.get<ResponseObject<SystemStatus>>("/api/status");
}

export function upsertSystemSetting(systemSetting: SystemSetting) {
  return request.post<ResponseObject<SystemSetting>>("/api/system/setting", systemSetting);
}

export function signin(email: string, password: string) {
  return request.post<ResponseObject<User>>("/api/auth/signin", {
    email,
    password,
  });
}

export function signup(email: string, password: string, role: UserRole) {
  return request.post<ResponseObject<User>>("/api/auth/signup", {
    email,
    password,
    role,
    name: email,
  });
}

export function signout() {
  return request.post("/api/auth/logout");
}

export function createUser(userCreate: UserCreate) {
  return request.post<ResponseObject<User>>("/api/user", userCreate);
}

export function getMyselfUser() {
  return request.get<ResponseObject<User>>("/api/user/me");
}

export function getUserList() {
  return request.get<ResponseObject<User[]>>("/api/user");
}

export function getUserById(id: number) {
  return request.get<ResponseObject<User>>(`/api/user/${id}`);
}

export function upsertUserSetting(upsert: UserSettingUpsert) {
  return request.post<ResponseObject<UserSetting>>(`/api/user/setting`, upsert);
}

export function patchUser(userPatch: UserPatch) {
  return request.patch<ResponseObject<User>>(`/api/user/${userPatch.id}`, userPatch);
}

export function deleteUser(userDelete: UserDelete) {
  return request.delete(`/api/user/${userDelete.id}`);
}

export function getAllMemos(memoFind?: MemoFind) {
  const queryList = [];
  if (memoFind?.offset) {
    queryList.push(`offset=${memoFind.offset}`);
  }
  if (memoFind?.limit) {
    queryList.push(`limit=${memoFind.limit}`);
  }

  return request.get<ResponseObject<Memo[]>>(`/api/memo/all?${queryList.join("&")}`);
}

export function getMemoList(memoFind?: MemoFind) {
  const queryList = [];
  if (memoFind?.creatorId) {
    queryList.push(`creatorId=${memoFind.creatorId}`);
  }
  if (memoFind?.rowStatus) {
    queryList.push(`rowStatus=${memoFind.rowStatus}`);
  }
  if (memoFind?.pinned) {
    queryList.push(`pinned=${memoFind.pinned}`);
  }
  if (memoFind?.offset) {
    queryList.push(`offset=${memoFind.offset}`);
  }
  if (memoFind?.limit) {
    queryList.push(`limit=${memoFind.limit}`);
  }
  return request.get<ResponseObject<Memo[]>>(`/api/memo?${queryList.join("&")}`);
}

export function getMemoStats(userId: UserId) {
  return request.get<ResponseObject<number[]>>(`/api/memo/stats?creatorId=${userId}`);
}

export function getMemoById(id: MemoId) {
  return request.get<ResponseObject<Memo>>(`/api/memo/${id}`);
}

export function createMemo(memoCreate: MemoCreate) {
  return request.post<ResponseObject<Memo>>("/api/memo", memoCreate);
}

export function patchMemo(memoPatch: MemoPatch) {
  return request.patch<ResponseObject<Memo>>(`/api/memo/${memoPatch.id}`, memoPatch);
}

export function pinMemo(memoId: MemoId) {
  return request.post(`/api/memo/${memoId}/organizer`, {
    pinned: true,
  });
}

export function unpinMemo(memoId: MemoId) {
  return request.post(`/api/memo/${memoId}/organizer`, {
    pinned: false,
  });
}

export function deleteMemo(memoId: MemoId) {
  return request.delete(`/api/memo/${memoId}`);
}

export function getShortcutList(shortcutFind?: ShortcutFind) {
  const queryList = [];
  if (shortcutFind?.creatorId) {
    queryList.push(`creatorId=${shortcutFind.creatorId}`);
  }
  return request.get<ResponseObject<Shortcut[]>>(`/api/shortcut?${queryList.join("&")}`);
}

export function createShortcut(shortcutCreate: ShortcutCreate) {
  return request.post<ResponseObject<Shortcut>>("/api/shortcut", shortcutCreate);
}

export function patchShortcut(shortcutPatch: ShortcutPatch) {
  return request.patch<ResponseObject<Shortcut>>(`/api/shortcut/${shortcutPatch.id}`, shortcutPatch);
}

export function deleteShortcutById(shortcutId: ShortcutId) {
  return request.delete(`/api/shortcut/${shortcutId}`);
}

export function getResourceList() {
  return request.get<ResponseObject<Resource[]>>("/api/resource");
}

export function uploadFile(formData: FormData) {
  return request.post<ResponseObject<Resource>>("/api/resource", formData);
}

export function deleteResourceById(id: ResourceId) {
  return request.delete(`/api/resource/${id}`);
}

export function patchResource(resourcePatch: ResourcePatch) {
  return request.patch<ResponseObject<Resource>>(`/api/resource/${resourcePatch.id}`, resourcePatch);
}

export function getMemoResourceList(memoId: MemoId) {
  return request.get<ResponseObject<Resource[]>>(`/api/memo/${memoId}/resource`);
}

export function upsertMemoResource(memoId: MemoId, resourceId: ResourceId) {
  return request.post<ResponseObject<Resource>>(`/api/memo/${memoId}/resource`, {
    resourceId,
  });
}

export function deleteMemoResource(memoId: MemoId, resourceId: ResourceId) {
  return request.delete(`/api/memo/${memoId}/resource/${resourceId}`);
}

export function getTagList(tagFind?: TagFind) {
  const queryList = [];
  if (tagFind?.creatorId) {
    queryList.push(`creatorId=${tagFind.creatorId}`);
  }
  return request.get<ResponseObject<string[]>>(`/api/tag?${queryList.join("&")}`);
}

export async function getRepoStarCount() {
  const { data } = await request.get(`https://api.github.com/repos/usememos/memos`, {
    headers: {
      Accept: "application/vnd.github.v3.star+json",
      Authorization: "",
    },
  });
  return data.stargazers_count as number;
}

export async function getRepoLatestTag() {
  const { data } = await request.get(`https://api.github.com/repos/usememos/memos/tags`, {
    headers: {
      Accept: "application/vnd.github.v3.star+json",
      Authorization: "",
    },
  });
  return data[0].name as string;
}
