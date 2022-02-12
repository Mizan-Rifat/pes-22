<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;
use App\Models\User;

class RolePermissionController extends Controller {
    public function givePermissionToUser($user) {
        $user->givePermissionTo('edit articles');
    }

    public function getUserPermissions(User $user) {
        return  $user->getAllPermissions();
    }
}
