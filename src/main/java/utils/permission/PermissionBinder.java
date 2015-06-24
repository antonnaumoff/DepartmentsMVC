package utils.permission;


public class PermissionBinder {

    public static Permission bindPermission(String data) {
        Permission permission = new Permission();
        String[] arr = data.split(",");
        permission.setRead(arr[0].split(":")[1].substring(1));
        permission.setEdit(arr[1].split(":")[1].substring(1));
        permission.setDelete(arr[2].split(":")[1].substring(1));
        return permission;
    }
}
