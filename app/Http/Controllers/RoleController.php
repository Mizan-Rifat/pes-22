<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Spatie\Permission\Models\Role;

class RoleController extends Controller
{
    public function store()
    {
        $role = Role::create(['name'=>'admin']);

        return $role;
    }
}
